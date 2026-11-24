import { FaRegStar } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard.jsx'
import StarOverlay from '../components/StarOverlay.jsx'
import { FEATURED_PROJECT_LIMIT, PINNED_REPOSITORIES } from '../config/githubProjects'
import { useGitHubProjects } from '../hooks/useGitHubProjects'

const PROJECTS_TITLE = PINNED_REPOSITORIES.length > 0 ? 'Featured Projects' : 'Latest Projects'

export default function Projects() {
  const { projects, status } = useGitHubProjects({
    limit: FEATURED_PROJECT_LIMIT,
    view: 'featured',
  })

  return (
    <section id="projects" className="featured-projects star-overlay-host">
      <StarOverlay />
      <div className="featured-projects__inner">
        <div className="featured-projects__header">
          <div className="featured-projects__title">
            <FaRegStar className="featured-projects__titleIcon" />
            <h2>{PROJECTS_TITLE}</h2>
          </div>
          <a
            href="/projects"
            className="featured-projects__viewAll"
            aria-label="View all projects"
          >
            View all
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        {status === 'loading' && (
          <p className="featured-projects__state">Loading GitHub projects...</p>
        )}

        {status === 'error' && (
          <p className="featured-projects__state">Unable to load GitHub projects right now.</p>
        )}

        {status === 'ready' && projects.length === 0 && (
          <p className="featured-projects__state">
            Add repo names to PINNED_REPOSITORIES to show featured projects.
          </p>
        )}

        {status === 'ready' && projects.length > 0 && (
          <div className="featured-projects__grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id || project.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
