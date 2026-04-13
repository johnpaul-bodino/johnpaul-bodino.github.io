import '../styles/Navbar.css'

export default function Navbar() {
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
      <span className="navbar-sun">
        <img src="/Sun.svg" alt="Sun Icon" />
      </span>
    </nav>
  )
}
