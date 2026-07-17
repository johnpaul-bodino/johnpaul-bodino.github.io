import { FaGithub } from 'react-icons/fa'
import { FiExternalLink, FiGitBranch, FiStar, FiX } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectCard({ project }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const {
    title,
    description,
    stack = [],
    topics = [],
    accent,
    repoUrl,
    liveUrl,
    previewImage,
    stars = 0,
    forks = 0,
    collaborators = [],
  } = project

  useEffect(() => {
    if (!isPreviewOpen) {
      return undefined
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isPreviewOpen])

  const previewModal = isPreviewOpen && previewImage
    ? createPortal(
        <div
          className="featured-projects__previewModal"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} preview image`}
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="featured-projects__previewModalContent" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="featured-projects__previewClose"
              aria-label="Close preview"
              onClick={() => setIsPreviewOpen(false)}
            >
              <FiX aria-hidden="true" />
            </button>
            <img src={previewImage} alt={`${title} preview`} />
          </div>
        </div>,
        document.body
      )
    : null

  return (
    <>
    <article className="featured-projects__card">
      {collaborators.length > 0 && (
        <div className="featured-projects__collaborators" aria-label={`${title} contributors`}>
          {collaborators.map((user) => (
            <a
              href={user.profileUrl}
              target="_blank"
              rel="noreferrer"
              title={`${user.login} - ${user.contributions} contributions`}
              aria-label={`${user.login} GitHub profile`}
              key={user.id}
            >
              <img src={user.avatarUrl} alt="" />
            </a>
          ))}
        </div>
      )}

      <div className="featured-projects__preview">
        {previewImage && (
          <button
            type="button"
            aria-label={`Open full ${title} preview image`}
            className="featured-projects__previewLink"
            onClick={() => setIsPreviewOpen(true)}
          >
            <img src={previewImage} alt={`${title} preview`} loading="lazy" />
          </button>
        )}
        <span>{accent}</span>
      </div>

      <div className="featured-projects__body">
        <h3>{title}</h3>
        <p>{description}</p>

        {(stack.length > 0 || topics.length > 0) && (
          <div className="featured-projects__stack">
            {stack.map((item) => (
              <span key={`language-${item}`}>{item}</span>
            ))}
            {topics.map((item) => (
              <span key={`topic-${item}`}>{item}</span>
            ))}
          </div>
        )}

        <div className="featured-projects__stats" aria-label={`${title} repository stats`}>
          <span>
            <FiStar aria-hidden="true" />
            {stars}
          </span>
          <span>
            <FiGitBranch aria-hidden="true" />
            {forks}
          </span>
        </div>
      </div>

      {(repoUrl || liveUrl) && (
        <div className="featured-projects__actions">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title} repository`}>
              <FaGithub aria-hidden="true" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${title} live site`}
              className="featured-projects__action--live"
              title="Live site"
            >
              <FiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      )}

    </article>
    {previewModal}
    </>
  )
}
