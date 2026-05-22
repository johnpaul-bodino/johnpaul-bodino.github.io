import React from "react";
import TimelineTabs from "../components/TimelineTabs";
import "../styles/TimelinePage.css";
import "../components/StarOverlay.jsx";
import StarOverlay from "../components/StarOverlay.jsx";


export default function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <div className="timeline__container">
        <TimelineTabs />
      </div>
    </section>
  );
}
