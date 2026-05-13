import React, { useState } from "react";
import "../styles/TimelineTabs.css";
import { IoIosBriefcase } from "react-icons/io";
// removed extra stack icons for undo

const workTimeline = [
  {
    date: "April 2025 - June 2025",
    title: "Software Developer Intern | EAST - Enrollment System",
    description: "8Con Academy - Meycauayan, Bulacan",
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
    bullets: [
      "Data Structures, Object-Oriented Programming, Programming, Algorithms, Information Security, Natural Language Processing, Intelligent Systems"
    ]
  },
];

function TimelineItem({ item, isLast }) {
  return (
    <li className={`timeline__item${isLast ? " timeline__item--last" : ""}`}>
      <div className="timeline__marker"></div>
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
            <span key={i} className={`badge-pill badge-${b.toLowerCase()}`}>{b}</span>
          ))}
        </div>
      )}
      {item.techStack && item.techStack.length > 0 && (
        <div className="timeline__techStack" aria-label="Tech stack">
          {item.techStack.map((t, idx) => (
            <span key={idx} className="timeline__chip" style={{ borderColor: t.color, color: t.color }}>
              {t.icon}
              <span className="timeline__chipLabel" style={{ marginLeft: 6 }}>{t.name}</span>
            </span>
          ))}
        </div>
      )}
      {item.link && (
        <a href={item.link} className="timeline__link">
          {item.linkText}
          <svg className="timeline__linkIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
          </svg>
        </a>
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
            <TimelineItem
              key={index}
              item={item}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
