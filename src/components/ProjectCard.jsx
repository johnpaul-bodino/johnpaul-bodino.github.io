import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  const { title, description, stack = [], accent, repoUrl, liveUrl } = project

  return (
    <article className="featured-projects__card">
      <div className="featured-projects__preview">
        <span>{accent}</span>
      </div>

      <div className="featured-projects__body">
        <h3>{title}</h3>
        <p>{description}</p>

        {stack.length > 0 && (
          <div className="featured-projects__stack">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
      </div>

      {(repoUrl || liveUrl) && (
        <div className="featured-projects__actions">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title} repository`}>
              <FaGithub aria-hidden="true" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title} live site`}>
              <FiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}
