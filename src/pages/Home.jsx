import '../styles/Home.css'
import Navbar from '../components/Navbar'

function IconSun(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11 1h2v3h-2V1Zm0 20h2v3h-2v-3ZM3.515 4.929 4.93 3.515 7.05 5.636 5.636 7.05 3.515 4.93Zm13.435 13.435 1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121ZM1 11h3v2H1v-2Zm20 0h3v2h-3v-2ZM3.515 19.071l2.121-2.121L7.05 18.364 4.93 20.485l-1.414-1.414Zm13.435-13.435 2.121-2.121 1.414 1.414-2.121 2.121-1.414-1.414Z"
      />
    </svg>
  )
}

function IconDownload(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293 1.414 1.414L12 17.414l-4.707-4.707 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Zm-7 16h14v2H5v-2Z"
      />
    </svg>
  )
}

function IconGithub(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
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

function IconLinkedIn(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.94 6.5A2.2 2.2 0 1 1 6.94 2.1a2.2 2.2 0 0 1 0 4.4ZM3.9 21.9h6.1V8H3.9v13.9ZM10.9 8h5.8v1.9h.1c.8-1.4 2.3-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.8v7.5h-6.1v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5v6.7h-6.1V8Z"
      />
    </svg>
  )
}

function IconMail(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
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
      
      <section className="home">
        <Navbar />
        <div className="home__container">
          <div className="home__content home__fadeIn">
          <h1 className="home__title">
            Hey! I&apos;m <span className="home__accent">John Paul Bodino</span>
          </h1>

          <div className="home__desc">
            <p>
              I&apos;m a software developer who enjoys building reliable, scalable applications and solving real-world problems
              through code.
            </p>
            <p>
              I&apos;m comfortable working across the stack, and I like being involved in the full process—from shaping ideas to
              bringing them into production.
            </p>
          </div>

          <div className="home__actions">
            <a className="home__resume" href="#" aria-label="Download resume">
              <IconDownload />
              <span>Resume</span>
            </a>

            <div className="home__icons" aria-label="Social links">
              <a className="home__iconLink" href="#" aria-label="GitHub">
                <IconGithub />
              </a>
              <a className="home__iconLink" href="#" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a className="home__iconLink" href="#" aria-label="Email">
                <IconMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
