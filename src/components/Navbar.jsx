import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-link">Home</a>
      <a href="#about" className="navbar-link">About</a>
      <a href="#projects" className="navbar-link">Projects</a>
      <a href="#skills" className="navbar-link">Skills</a>
      <a href="#contact" className="navbar-link">Contact</a>
      <span className="navbar-sun">☀️</span>
    </nav>
  )
}
