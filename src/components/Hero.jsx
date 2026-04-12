export default function Hero() {
  return (
    <section id="profile">
      <div className="homepage_container">
        <div className="section_pic-container">
          {/* <img
            className="hero"
            src="https://res.cloudinary.com/dda8q97x2/image/upload/v1724388660/portfolio%20images/hprabo7c31iipvyoqubc.jpg"
            alt=""
          /> */}
        </div>

        <div className="intro">
          <h1>
            Hi, I’m <span className="highlight">John Paul</span>
          </h1>
          <p>
            a <span className="ellipse">Web Developer</span>
          </p>

          <p className="construction">
            🚧 Portfolio is currently under construction. I'm actively updating it with new projects and improvements.
          </p>
        </div>

        <div className="btn-container">
          <a href="#project" className="btn">
            Browse Projects
          </a>
        </div>
      </div>
    </section>
  )
}
