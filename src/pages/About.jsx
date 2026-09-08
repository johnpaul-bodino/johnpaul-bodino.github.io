import { useState, useEffect } from 'react'
import '../styles/about.css'
import FadeIn from '../components/FadeIn.jsx'
import StarOverlay from '../components/StarOverlay.jsx'
import FallingText from '../components/FallingText.jsx'
import { GiPaintBrush } from "react-icons/gi"
import { BsLightningCharge } from "react-icons/bs"
import { FaLaptopCode } from "react-icons/fa6"
import { BsGrid } from "react-icons/bs"

export default function About() {
  const [isGridActive, setIsGridActive] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 768
      setIsDesktop(desktop)
      // Auto-deactivate grid mode when resizing to mobile
      if (!desktop) setIsGridActive(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const laptopIconMarkup = `
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="falling-icon green2" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 96c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v256h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H0c-17.7 0-32-14.3-32-32s14.3-32 32-32h64V96zm128 64c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H192z"></path>
    </svg>
  `

  return (
    <section id="about" className="about star-overlay-host">
      <StarOverlay />
      <FadeIn>
        <div className="about__header">
          <h2 className="about__title">WHAT I BUILD</h2>
          <button
            type="button"
            className={`about__button ${isGridActive ? 'about__button--active' : ''}`}
            aria-label="Toggle grid view"
            onClick={() => setIsGridActive(prev => !prev)}
          >
            <BsGrid />
          </button>
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="about__grid">
          {/* Card 1: UI & UX */}
          <div className={`about__card ${isGridActive ? 'no-hover' : ''}`}>
            <div className="about__card-content">
              <div className="about__icon about__icon--green1">
                <GiPaintBrush />
              </div>
              <h3 className="about__cardTitle green1">UI & UX</h3>
              <p className="about__cardDesc">
                Designing intuitive and seamless user experiences that make interactions feel natural and delightful.
              </p>
            </div>
          </div>

          {/* Card 2: FRONTEND DEVELOPMENT */}
          <div className={`about__card ${isGridActive ? 'no-hover' : ''}`}>
            {isGridActive && isDesktop ? (
              <div className="about__card-content about__card-content--falling">
                <FallingText
                  iconSvg={laptopIconMarkup}
                  text="FRONTEND DEVELOPMENT Crafting interfaces that feel fast responsive effortless no matter the screen size"
                  highlightWords={["FRONTEND", "DEVELOPMENT"]}
                  highlightClass="theme-highlight"
                  trigger="auto"
                  gravity={0.5}
                  fontSize="0.88rem"
                />
              </div>
            ) : (
              <div className="about__card-content">
                <div className="about__icon about__icon--green2">
                  <FaLaptopCode />
                </div>
                <h3 className="about__cardTitle green2">FRONTEND DEVELOPMENT</h3>
                <p className="about__cardDesc">
                  Crafting interfaces that feel fast, responsive, and effortless — no matter the screen size.
                </p>
              </div>
            )}
          </div>

          {/* Card 3: BACKEND DEVELOPMENT */}
          <div className={`about__card ${isGridActive ? 'no-hover' : ''}`}>
            <div className="about__card-content">
              <div className="about__icon about__icon--green3">
                <BsLightningCharge />
              </div>
              <h3 className="about__cardTitle green3">BACKEND DEVELOPMENT</h3>
              <p className="about__cardDesc">
                Engineering the logic and data layer that keeps an application reliable under real-world load.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}