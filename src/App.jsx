import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import AllProjects from './pages/AllProjects.jsx'
import Skills from './pages/Skills.jsx'
import Timeline from './pages/Timeline.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const isProjectsPage = currentPath === '/projects'

  return (
    <>
      <Navbar />
      {isProjectsPage ? (
        <AllProjects />
      ) : (
        <>
          <Home />
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </>
  )
}
