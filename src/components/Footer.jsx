import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import StarOverlay from './StarOverlay.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer star-overlay-host">
      <StarOverlay />
      <div className="site-footer__bar">
        <p className="site-footer__copyright">
          <span className="site-footer__statusDot" aria-hidden="true"></span>
          &copy; 2026 John Paul Bodino
        </p>
        <div className="site-footer__links" role="navigation" aria-label="Social links">
          <a href="https://github.com/johnpaul-bodino" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=johnpaulbodino49@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
