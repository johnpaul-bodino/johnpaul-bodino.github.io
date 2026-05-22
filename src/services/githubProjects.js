import { FEATURED_PROJECT_LIMIT, PINNED_REPOSITORIES } from '../config/githubProjects'

const PROJECTS_URL = '/data/projects.json'

async function getJson(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}

function sortPinnedFirst(projects) {
  if (PINNED_REPOSITORIES.length === 0) {
    return projects
  }

  const order = new Map(
    PINNED_REPOSITORIES.map((repoName, index) => [repoName, index])
  )

  return [...projects].sort((a, b) => {
    const aOrder = order.has(a.title)
      ? order.get(a.title)
      : Number.MAX_SAFE_INTEGER

    const bOrder = order.has(b.title)
      ? order.get(b.title)
      : Number.MAX_SAFE_INTEGER

    return aOrder - bOrder
  })
}

function filterPinned(projects) {
  if (PINNED_REPOSITORIES.length === 0) {
    return projects
  }

  return sortPinnedFirst(
    projects.filter((project) =>
      PINNED_REPOSITORIES.includes(project.title)
    )
  )
}

function getFeaturedProjects(projects, limit) {
  return filterPinned(projects).slice(0, limit)
}

function getAllProjects(projects) {
  if (PINNED_REPOSITORIES.length > 0) {
    return projects.filter((project) => !PINNED_REPOSITORIES.includes(project.title))
  }

  return projects.slice(FEATURED_PROJECT_LIMIT)
}

export async function fetchGitHubProjects({
  limit = FEATURED_PROJECT_LIMIT,
  view = 'featured',
} = {}) {
  try {
    const data = await getJson(PROJECTS_URL)
    const projects = Array.isArray(data) ? data : data.projects || []

    return view === 'all' ? getAllProjects(projects) : getFeaturedProjects(projects, limit)
  } catch (error) {
    console.error('Project data fetch failed:', error)
    throw error
  }
}
