import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = resolve(__dirname, '..')
const OUTPUT_PATH = resolve(ROOT_DIR, 'public', 'data', 'projects.json')
const CACHE_PATH = resolve(ROOT_DIR, '.cache', 'projects', 'github-projects.json')
const GITHUB_API = 'https://api.github.com'
const DEFAULT_USERNAME = 'johnpaul-bodino'
const CACHE_TTL_MS = 10 * 60 * 1000
const CACHE_VERSION = 5

function loadLocalEnv() {
  return readFile(resolve(ROOT_DIR, '.env'), 'utf8')
    .then((file) => {
      for (const line of file.split(/\r?\n/)) {
        const trimmed = line.trim()

        if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) {
          continue
        }

        const [key, ...valueParts] = trimmed.split('=')
        const value = valueParts.join('=').trim().replace(/^["']|["']$/g, '')

        if (!process.env[key]) {
          process.env[key] = value
        }
      }
    })
    .catch(() => {})
}

function getArgValue(name) {
  const prefix = `${name}=`
  const arg = process.argv.find((item) => item.startsWith(prefix))

  return arg ? arg.slice(prefix.length) : ''
}

function getGitHubHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'johnpaul-bodino-project-generator',
  }

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  return headers
}

async function getJson(path) {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers: getGitHubHeaders(),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`GitHub API ${response.status} for ${path}: ${body}`)
  }

  return response.json()
}

async function getPaginated(path) {
  const results = []
  let page = 1

  while (true) {
    const separator = path.includes('?') ? '&' : '?'
    const data = await getJson(`${path}${separator}per_page=100&page=${page}`)

    results.push(...data)

    if (data.length < 100) {
      return results
    }

    page += 1
  }
}

function uniqueItems(items) {
  return items
    .filter(Boolean)
    .filter((item, index, list) => list.indexOf(item) === index)
}

function mapLanguages(languages) {
  return uniqueItems(Object.entries(languages || {})
    .sort(([, a], [, b]) => b - a)
    .map(([language]) => language))
}

function mapTopics(repo) {
  return uniqueItems(repo.topics || [])
}

function mapCollaborators(contributors) {
  return contributors.map((user) => ({
    id: user.id,
    login: user.login,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
    contributions: user.contributions,
  }))
}

function mapForkInformation(repo, forkDetails) {
  return {
    isFork: Boolean(repo.fork),
    parent: forkDetails?.parent
      ? {
          id: forkDetails.parent.id,
          title: forkDetails.parent.name,
          fullName: forkDetails.parent.full_name,
          repoUrl: forkDetails.parent.html_url,
          owner: forkDetails.parent.owner?.login || '',
        }
      : null,
    source: forkDetails?.source
      ? {
          id: forkDetails.source.id,
          title: forkDetails.source.name,
          fullName: forkDetails.source.full_name,
          repoUrl: forkDetails.source.html_url,
          owner: forkDetails.source.owner?.login || '',
        }
      : null,
  }
}

function decodeBase64(value) {
  return Buffer.from(value || '', 'base64').toString('utf8')
}

function findReadmeImage(markdown) {
  const markdownImage = markdown.match(/!\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/)

  if (markdownImage?.[1]) {
    return markdownImage[1]
  }

  const htmlImage = markdown.match(/<img[^>]+src=["']([^"']+)["']/i)

  return htmlImage?.[1] || ''
}

function normalizeUrl(value) {
  const url = String(value || '').trim()

  if (!url || url.startsWith('#')) {
    return ''
  }

  if (/^https?:\/\//i.test(url)) {
    return url
  }

  if (/^[\w.-]+\.[a-z]{2,}(?:\/.*)?$/i.test(url)) {
    return `https://${url}`
  }

  return ''
}

function findReadmeLiveUrl(markdown, repo) {
  const links = [...markdown.matchAll(/\[[^\]]+]\((https?:\/\/[^)\s]+)(?:\s+"[^"]*")?\)/gi)]
    .map((match) => normalizeUrl(match[1]))
    .filter(Boolean)

  const htmlLinks = [...markdown.matchAll(/<a[^>]+href=["'](https?:\/\/[^"']+)["']/gi)]
    .map((match) => normalizeUrl(match[1]))
    .filter(Boolean)

  const candidates = [...links, ...htmlLinks]
  const githubHostPattern = /(^|\.)github\.com$/i

  return candidates.find((url) => {
    try {
      const parsed = new URL(url)
      return !githubHostPattern.test(parsed.hostname) && url !== repo.html_url
    } catch {
      return false
    }
  }) || ''
}

function toRawGitHubUrl(imagePath, repo) {
  if (!imagePath || imagePath.startsWith('#')) {
    return ''
  }

  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath
  }

  const cleanPath = imagePath
    .replace(/^\.?\//, '')
    .split('#')[0]
    .split('?')[0]

  return `https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/${encodeURI(cleanPath)}`
}

async function getReadmeMarkdown(repo) {
  const readme = await getJson(`/repos/${repo.owner.login}/${repo.name}/readme`)

  return decodeBase64(readme.content)
}

async function getGitHubPagesUrl(repo) {
  const pages = await getJson(`/repos/${repo.owner.login}/${repo.name}/pages`)

  return normalizeUrl(pages.html_url)
}

function mapProject(repo, contributors, forkDetails, previewImage, liveUrl, languages) {
  return {
    id: repo.id,
    title: repo.name,
    description: repo.description || 'No description provided yet.',
    repoUrl: repo.html_url,
    liveUrl,
    previewImage,
    stack: mapLanguages(languages),
    topics: mapTopics(repo),
    accent: repo.fork ? 'Forked' : repo.private ? 'Private' : 'Public',
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.updated_at,
    collaborators: mapCollaborators(contributors),
    fork: mapForkInformation(repo, forkDetails),
  }
}

async function readFreshCache() {
  if (process.argv.includes('--force') || process.env.FORCE_PROJECTS_REFRESH === 'true') {
    return null
  }

  try {
    const cache = JSON.parse(await readFile(CACHE_PATH, 'utf8'))
    const cachedAt = new Date(cache.cachedAt).getTime()

    if (
      cache.version === CACHE_VERSION &&
      Number.isFinite(cachedAt) &&
      Date.now() - cachedAt < CACHE_TTL_MS
    ) {
      return cache.data
    }
  } catch {
    return null
  }

  return null
}

async function writeJson(path, data) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

async function fetchProject(repo) {
  const [contributors, forkDetails, readmeMarkdown, pagesUrl, languages] = await Promise.all([
    getJson(`/repos/${repo.owner.login}/${repo.name}/contributors?per_page=6`).catch((error) => {
      console.warn(`Could not fetch contributors for ${repo.full_name}: ${error.message}`)
      return []
    }),
    repo.fork
      ? getJson(`/repos/${repo.owner.login}/${repo.name}`).catch((error) => {
          console.warn(`Could not fetch fork details for ${repo.full_name}: ${error.message}`)
          return null
        })
      : Promise.resolve(null),
    getReadmeMarkdown(repo).catch((error) => {
      console.warn(`Could not fetch README for ${repo.full_name}: ${error.message}`)
      return ''
    }),
    getGitHubPagesUrl(repo).catch(() => ''),
    getJson(`/repos/${repo.owner.login}/${repo.name}/languages`).catch((error) => {
      console.warn(`Could not fetch languages for ${repo.full_name}: ${error.message}`)
      return repo.language ? { [repo.language]: 1 } : {}
    }),
  ])

  const previewImage = toRawGitHubUrl(findReadmeImage(readmeMarkdown), repo)
  const liveUrl = normalizeUrl(repo.homepage) || pagesUrl || findReadmeLiveUrl(readmeMarkdown, repo)

  return mapProject(repo, contributors, forkDetails, previewImage, liveUrl, languages)
}

async function generateProjects() {
  await loadLocalEnv()

  const username = getArgValue('--username') || process.env.GITHUB_USERNAME || DEFAULT_USERNAME
  const cachedData = await readFreshCache()

  if (cachedData) {
    await writeJson(OUTPUT_PATH, cachedData)
    console.log(`Wrote ${cachedData.projects.length} projects from local cache to ${OUTPUT_PATH}`)
    return
  }

  const repos = await getPaginated(
    `/users/${username}/repos?sort=updated&direction=desc&type=owner`
  )

  const publicRepos = repos.filter((repo) => !repo.archived && !repo.private)
  const projects = await Promise.all(publicRepos.map(fetchProject))
  const data = {
    generatedAt: new Date().toISOString(),
    username,
    count: projects.length,
    projects,
  }

  await writeJson(OUTPUT_PATH, data)
  await writeJson(CACHE_PATH, {
    version: CACHE_VERSION,
    cachedAt: new Date().toISOString(),
    data,
  })

  console.log(`Wrote ${projects.length} projects to ${OUTPUT_PATH}`)
}

generateProjects().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
