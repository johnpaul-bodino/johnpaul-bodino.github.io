import { FaRegStar } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard.jsx'

const featuredProjects = [
  // {
  //   title: 'Portfolio Website',
  //   description: 'A personal portfolio built with React, focused on clean sections, responsive layouts, and a polished theme system.',
  //   repoUrl: '',
  //   liveUrl: '',
  //   stack: ['React', 'Responsive UI'],
  //   accent: 'In Progress',
  // },
  // {
  //   title: 'Backend API Practice',
  //   description: 'Practice work around server-side logic, REST API structure, database handling, and reliable application workflows.',
  //   repoUrl: '',
  //   liveUrl: '',
  //   stack: ['REST API', 'Database'],
  //   accent: 'Building',
  // },
  // {
  //   title: 'Coursework & Experiments',
  //   description: 'A collection of small apps and exercises from coursework, including UI practice, search tools, and automation ideas.',
  //   repoUrl: '',
  //   liveUrl: '',
  //   stack: ['Java', 'Utilities'],
  //   accent: 'Coming Soon',
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="featured-projects">
      <div className="featured-projects__inner">
        <div className="featured-projects__header">
          <div className="featured-projects__title">
            <FaRegStar className="featured-projects__titleIcon" />
            <h2>Updating..</h2>
          </div>
          <a
            // href="https://github.com/johnpaul-bodino"
            className="featured-projects__viewAll"
            target="_blank"
            rel="noreferrer"
            aria-label="View all projects on GitHub"
          >
            View all
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="featured-projects__grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
