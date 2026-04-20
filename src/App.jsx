import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './styles/Construction.css'

function ConstructionIcon() {
  return (
    <svg className="construction__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
}

function Construction() {
  return (
    <div className="construction">
      <div className="construction__content">
        <div className="construction__icon-wrapper">
          <ConstructionIcon />
        </div>
        <h2 className="construction__title">Under Development</h2>
        <p className="construction__text">
          This portfolio is currently being built. Stay tuned for more updates.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Construction />
    </>
  )
}
