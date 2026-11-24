import { FaRegFolderOpen } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard.jsx'
import StarOverlay from '../components/StarOverlay.jsx'
import { useGitHubProjects } from '../hooks/useGitHubProjects'

const ALL_LIMIT = 100

export default function AllProjects() {
  const { projects, status } = useGitHubProjects({
    limit: ALL_LIMIT,
    view: 'all',
  })

  return (
    <main className="projects-page star-overlay-host">
      <StarOverlay />
      <div className="projects-page__inner">
        <header className="projects-page__header">
          <div className="projects-page__title">
            <FaRegFolderOpen className="projects-page__titleIcon" />
            <div>
              <h1>Projects</h1>
              <p>Stuff I built, forked, contributed to, and occasionally survived.</p>
            </div>
          </div>

          <a href="/#projects" className="projects-page__back">
            <FiArrowLeft aria-hidden="true" />
            back to home
          </a>
        </header>

        {status === 'loading' && (
          <p className="featured-projects__state">Loading GitHub projects...</p>
        )}

        {status === 'error' && (
          <p className="featured-projects__state">Unable to load GitHub projects right now.</p>
        )}

        {status === 'ready' && projects.length === 0 && (
          <p className="featured-projects__state">No additional projects to show yet.</p>
        )}

        {status === 'ready' && projects.length > 0 && (
          <div className="projects-page__grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id || project.title} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
