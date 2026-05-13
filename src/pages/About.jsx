import '../styles/About.css'
import FadeIn from '../components/FadeIn'

export default function About() {
  return (
    <section className="about">
      <FadeIn>
        <h2 className="about__title">WHAT I BUILD</h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="about__grid">
          <div className="about__card">
            <div className="about__icon about__icon--green1">
              <img src="https://res.cloudinary.com/dazttfchn/image/upload/q_auto/f_auto/v1776694016/paint_brush_h8xhjt.svg" style={{color: '#22c55e'}} />
            </div>
            <h3 className="about__cardTitle green1">UI & UX</h3>
            <p className="about__cardDesc">
              Designing intuitive and seamless user experiences that make interactions feel natural and delightful.
            </p>
          </div>

          <div className="about__card">
            <div className="about__icon about__icon--green2">
              <img src="https://res.cloudinary.com/dazttfchn/image/upload/q_auto/f_auto/v1776065273/mobile_and_laptop_ih2lcq.svg" style={{color: '#4ade80'}} />
            </div>
            <h3 className="about__cardTitle green2">WEB & MOBILE APP</h3>
            <p className="about__cardDesc">
              Building modern, fast, and responsive applications that work flawlessly across all devices.
            </p>
          </div>

          <div className="about__card">
            <div className="about__icon about__icon--green3">
              <img src="https://res.cloudinary.com/dazttfchn/image/upload/q_auto/f_auto/v1776694031/kidlat_vacayx.png" style={{color: '#16a34a'}} />
            </div>
            <h3 className="about__cardTitle green3">DEVELOPMENT</h3>
            <p className="about__cardDesc">
              Creating scalable, reliable, and production-ready systems that handle real-world demands.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
