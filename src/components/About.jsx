import Skills from './Skills.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="about_container">
        <div className="container1">
          <div className="gif">
            <img
              src="https://res.cloudinary.com/dda8q97x2/image/upload/v1724450256/portfolio%20images/wuroohyjpgwxhuheryf2.gif"
              alt="for_about"
            />
          </div>
          <div className="box2">
            <div className="q_text">
              <q>Testing leads to failure, and failure leads to understanding. </q> - Burt Rutan
            </div>
          </div>
          <div className="box1">
            <img
              src="https://res.cloudinary.com/dda8q97x2/image/upload/v1725032753/portfolio%20images/br2eqjrhu2uc6ylwiorg.gif"
              alt="blue"
            />
          </div>
          <div className="education_container">
            <p className="white_text">Education</p>
            <p className="oblique_text">College of Mary Immaculate</p>
            <p className="normal_text">Bachelor of Science in Computer Science</p>
          </div>
        </div>

        <div className="container2">
          <div className="aboutme_container">
            <p className="black_text">About me</p>
            <a href="about_page.html">
              <img
                src="https://res.cloudinary.com/dda8q97x2/image/upload/v1724565155/portfolio%20images/sewehgecqghafxpkgqem.png"
                alt="another_page"
              />
            </a>
            <p className="clickme">Click me!</p>
          </div>

          <Skills />
        </div>
      </div>
    </section>
  )
}
