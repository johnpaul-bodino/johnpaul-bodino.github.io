import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Timeline from './pages/Timeline.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
