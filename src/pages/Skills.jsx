import '../styles/Skills.css';
import { useState } from 'react';
import { FaDocker, FaNodeJs, FaPython, FaCloudflare} from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiGimp, SiCanva, SiPhp, SiFastapi, SiExpressdotcom, SiMysql, SiFlask } from 'react-icons/si';
import { IoLogoHtml5, IoLogoCss3  } from "react-icons/io";
import { FaReact, FaFigma, FaAws  } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import FadeIn from '../components/FadeIn';
import { TbApi, TbCode } from "react-icons/tb";
import StarOverlay from '../components/StarOverlay.jsx';



export default function Skills() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const skillsData = [
    {
      title: 'Backend',
      description: 'I enjoy solving problems and building systems that are reliable and easy to scale. I focus on designing solid APIs.',
      icons: [
        { icon: <FaPython />, name: 'Python', color: '#346F9E' },
        { icon: <SiCplusplus />, name: 'C++', color: '#3f6791' },
        { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
        { icon: <SiPhp />, name: 'PHP', color: '#777BB4' },
        { icon: <SiFastapi />, name: 'FastAPI', color: '#009485' },
        { icon: <SiFlask />, name: 'Flask', color: '#39A6BD' },
        { icon: <SiExpressdotcom />, name: 'Express.js', color: '#F0CF00' },
        { icon: <TbApi />, name: 'REST API', color: '#3f6791' },
      ]
    },
    {
      title: 'Frontend & Design',
      description: "I work on creating responsive UIs and making sure everything feels clean, consistent, and user-friendly.",
      icons: [
        { icon: <FaReact/>, name: 'React', color: '#08D9FF' },
        { icon: <IoLogoHtml5 />, name: 'HTML5', color: '#E5532C' },
        { icon: <IoLogoCss3 />, name: 'CSS3', color: '#1572B6' },
        { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
        { icon: <FaFigma />, name: 'Figma', color: '#F24E1E' },
        { icon: <SiGimp />, name: 'GIMP', color: '#5A5444' },
        { icon: <SiCanva />, name: 'Canva', color: '#3B75E4' },
      ],
    },
    {
      title: 'Database & Infrastructure',
      description: 'I have experience setting up and managing applications using tools like AWS and Docker.',
      icons: [
        { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
        { icon: <FaCloudflare />, name: 'Cloudflare', color: '#F38020' },
        { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
        { icon: <BiLogoPostgresql />, name: 'PostgreSQL', color: '#376695' },
        { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
      ],
    },
    {
      title: 'Management',
      description: 'I’ve worked on projects where I helped organize tasks and collaborate with others using Agile and Scrum practices.',
      badges: ['Agile', 'Scrum']
    }
  ];

  return (
    <section id="skills" className="skills__container star-overlay-host">
      <StarOverlay />
      <div className="skills__inner">
        <FadeIn>
          <div className="skills__titleRow">
            <TbCode className="skills__titleIcon" />
            <span className="skills__titleText">Skills</span>
          </div>
        </FadeIn>
        <div className="skills__masonry">
           {skillsData.map((skill, index) => (
            <div key={index} className="skills__card">
              <h2 className="skills__cardTitle">{skill.title}</h2>
              <p className="skills__cardDescription">{skill.description}</p>
              
              {skill.icons && skill.icons.length > 0 ? (
                <div className="skills__iconsContainer">
                      {skill.icons.map((iconData, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="skills__iconWrapper"
                      onMouseEnter={() => setHoveredIcon(`${index}-${iconIndex}`)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <div className="skills__iconBox">
                        <div
                          className="skills__icon"
                          style={{
                            color: hoveredIcon === `${index}-${iconIndex}`
                              ? iconData.color
                              : 'var(--color-text-subtle)'
                          }}
                        >
                          {iconData.icon}
                        </div>
                      </div>
                      
                        {hoveredIcon === `${index}-${iconIndex}` && (
                          <div className="skills__tooltip">{iconData.name}</div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}
              
              {skill.badges && skill.badges.length > 0 ? (
                <div className="skills__badgesContainer">
                  {skill.badges.map((badge, badgeIndex) => (
                    <span key={badgeIndex} className="skills__badgeItem">{badge}</span>
                  ))}
                </div>
              ) : null}
              {/* Tech stack chips for Work item (optional) */}
              {skill.techStack && skill.techStack.length > 0 && (
                <div className="skills__techStack">
                  {skill.techStack.map((t, idx) => (
                    <span key={idx} className="badge" style={{ borderColor: t.color, color: t.color }}>
                      {t.icon}
                      <span style={{ marginLeft: 6 }}>{t.name}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
