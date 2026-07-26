import '../styles/Home.css'
import { FiLinkedin } from "react-icons/fi";
import ProfileCard from '../componensts/ProfileCard.jsx'
import StarOverlay from '../components/StarOverlay.jsx'
import profilePhoto from '../assets/paldo.webp'

const profileInfo = {
  imageUrl: profilePhoto,
  imageAlt: 'John Paul Bodino profile photo',
  initials: 'JB',
  availability: 'Open to work',
  availabilityColor: '#31a24c',
}

function IconDownload(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v5h5" />
      <path d="M12 10v6" />
      <path d="m9 13 3 3 3-3" />
      <path d="M9 19h6" />
    </svg>
  )
}

function IconGithub(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="home__iconSvg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.162 19.487c.5.092.683-.217.683-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.832.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.566 9.566 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.698 1.028 1.59 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.679.92.679 1.855 0 1.337-.012 2.417-.012 2.747 0 .268.18.58.688.482A10 10 0 0 0 12 2Z"
      />
    </svg>
  )
}

function IconMail(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="home__iconSvg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.35l8 5.333 8-5.333V8H4Zm16 10V10.65l-7.445 4.963a1 1 0 0 1-1.11 0L4 10.65V18h16Z"
      />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <section id="home" className="home star-overlay-host">
        <StarOverlay />
        <div className="home__container">
          <div className="home__content home__fadeIn">
            <div className="home__heroGrid">
              <div className="home__intro">
                <h1 className="home__title">
                  Hey! I&apos;m <span className="home__accent">John Paul Bodino</span>
                </h1>

                <div className="home__desc">
                  <p>
                    I&apos;m an <span className="homey">Aspiring Junior Software Developer</span> who enjoys building reliable applications and solving real-world problems
                    through code.
                  </p>
                  <p>
                    I enjoy full-stack development, with a strong focus on backend systems.
                  </p>
                </div>

                <div className="home__actions">
                  <a className="home__resume" href="/John Paul Bodino Resume.pdf" download="John Paul Bodino Resume.pdf" aria-label="Download resume">
                    <img
                      src="https://res.cloudinary.com/dazttfchn/image/upload/v1776048474/download_resume_lq2gz7.svg"
                      alt="Download Resume"
                      className="home__resumeIcon"
                    />
                    <span>Resume</span>
                  </a>

                  <div className="home__icons" aria-label="Social links">
                    <a className="home__iconLink" href="#" aria-label="GitHub">
                      <IconGithub />
                    </a>
                    <a className="home__iconLink" href="#" aria-label="LinkedIn">
                      <FiLinkedin />
                    </a>
                    <a
                      className="home__iconLink"
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=johnpaulbodino49@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Email"
                    >
                      <IconMail />
                    </a>
                  </div>
                </div>
              </div>

              <ProfileCard profile={profileInfo} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
