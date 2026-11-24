import { useState } from "react";
import "../styles/TimelineTabs.css";
import academyLogo from "../assets/8con_academy_logo.jfif";
import cmiLogo from "../assets/cmi.png";

const workTimeline = [
  {
    date: "April 2025 - June 2025",
    title: "Web Developer Intern | EAST - Enrollment System",
    description: "8Con Academy - Meycauayan, Bulacan",
    markerImage: academyLogo,
    markerAlt: "8Con Academy logo",
    bullets: [
      "Improve and maintained backend features for an enrollment system, including server-side logic, database management, and API integration using Node.js and Express.js.",
      "Established and documented RESTful APIs to support enrollment workflows and ensure clear structure for integration.",
      "Designed and developed a prototype for an onsite enrollment system aimed at streamlining student management and course management for 8Con Academy."
    ],
    badges: ["RestAPI","html/css","javascript","nodejs","express.js", "mysql"],
  },
];

const educationTimeline = [
  {
    date: "2022 - 2026",
    title: "Bachelor of Science in Computer Science",
    description: [
      "College of Mary Immaculate",
      "Graduated with a degree in Computer Science, where I developed strong technical skills and gained in-depth knowledge relevant to my career. During my studies, I worked on various projects focused on software and web development, applying both theoretical and practical concepts.",
      "Relevant Coursework:",
    ],
    markerImage: cmiLogo,
    markerAlt: "College of Mary Immaculate logo",
    bullets: [
      "Data Structures, Object-Oriented Programming, Programming, Algorithms, Information Security, Natural Language Processing, Intelligent Systems"
    ]
  },
];

function TimelineItem({ item }) {
  return (
    <li className="timeline__item">
      <div className={`timeline__marker${item.markerImage ? " timeline__marker--image" : ""}`}>
        {item.markerImage && (
          <img
            src={item.markerImage}
            alt={item.markerAlt || ""}
            className="timeline__markerImage"
            loading="lazy"
          />
        )}
      </div>
      <time className="timeline__date">{item.date}</time>
      <h3 className="timeline__title">{item.title}</h3>
      {Array.isArray(item.description) ? (
        item.description.map((d, idx) => (
          <p key={idx} className="timeline__description">{d}</p>
        ))
      ) : (
        <p className="timeline__description">{item.description}</p>
      )}
      {item.bullets && (
        <ul className="timeline__bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {item.badges && item.badges.length > 0 && (
        <div className="timeline__badgesRow" aria-label="Tech badges">
          {item.badges.map((b, i) => (
            <span key={i} className="badge-pill">{b}</span>
          ))}
        </div>
      )}
    </li>
  );
}

export default function TimelineTabs() {
  const [activeTab, setActiveTab] = useState("work");
  const timelineData = activeTab === "work" ? workTimeline : educationTimeline;

  return (
    <div className="timeline-tabs__wrapper">
      <div className="timeline-tabs__tabgroup">
        <button
          className={`timeline-tabs__tab${activeTab === "work" ? " active" : ""}`}
          onClick={() => setActiveTab("work")}
          type="button"
        >
          Work
        </button>
        <button
          className={`timeline-tabs__tab${activeTab === "education" ? " active" : ""}`}
          onClick={() => setActiveTab("education")}
          type="button"
        >
          Education
        </button>
      </div>
      <div className="timeline-tabs__content">
        <ol className="timeline__list">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </ol>
      </div>
    </div>
  );
}
