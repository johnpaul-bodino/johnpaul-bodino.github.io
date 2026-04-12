import { useCallback, useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <header>
      <div className="logo">Paul</div>

      <nav id="desktop-nav">
        <ul className="nav-links">
          <li>
            <a className="ey" href="#profile">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav id="hamburger-nav">
        <a href="#profile" className="ey">
          Home
        </a>

        <div className="hamburger-menu">
          <div
            className={`hamburger-icon${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') toggleMenu()
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`menu-links${menuOpen ? ' open' : ''}`}>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#project" onClick={closeMenu}>
                Project
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </header>
  )
}
