import { useEffect, useState } from 'react'
import { fetchGitHubProjects } from '../services/githubProjects'

export function useGitHubProjects({ limit, view }) {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let isMounted = true

    async function loadProjects() {
      setStatus('loading')

      try {
        const nextProjects = await fetchGitHubProjects({ limit, view })

        if (isMounted) {
          setProjects(nextProjects)
          setStatus('ready')
        }
      } catch {
        if (isMounted) {
          setProjects([])
          setStatus('error')
        }
      }
    }

    loadProjects()

    return () => {
      isMounted = false
    }
  }, [limit, view])

  return { projects, status }
}

