import '../styles/Navbar.css'
import { useState } from 'react'

export default function Navbar() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <nav className="navbar">
      <img
        src="https://res.cloudinary.com/dazttfchn/image/upload/v1776013650/logo_hero_tjwk0d.svg"
        alt="JB Logo"
        className="home__logo"
      />
      <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#contact" className="navbar-link">Contact</a>
      </div>
      
      <button 
        className="theme-btn"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="theme-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg className="theme-btn__icon theme-btn__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>
    </nav>
  )
}
