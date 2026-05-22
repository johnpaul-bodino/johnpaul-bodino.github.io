import React from "react";
import TimelineTabs from "../components/TimelineTabs";
import "../styles/TimelinePage.css";
import StarOverlay from "../components/StarOverlay.jsx";


export default function Timeline() {
  return (
    <section id="timeline" className="timeline star-overlay-host">
      <StarOverlay />
      <div className="timeline__container">
        <TimelineTabs />
      </div>
    </section>
  );
}
