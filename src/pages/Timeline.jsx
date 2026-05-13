import React from "react";
import TimelineTabs from "../components/TimelineTabs";
import "../styles/TimelinePage.css";


export default function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline__container">
        <TimelineTabs />
      </div>
    </section>
  );
}
