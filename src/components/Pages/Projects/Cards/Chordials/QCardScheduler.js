import React from "react";
import Project from "../../Project";

const QCardScheduler = ({ tags }) => {
  return (
    <Project
      title="Quarter Card Scheduler"
      description="Flow-based Scheduler for Distributing Quarter Cards"
      content={
        <div>
          <p>
            This project is a flow-based scheduler for distributing promotional
            quarter cards, built for{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://chordials.com"
            >
              The Chordials
            </a>{" "}
            a cappella group. It is powered by the Bellman-Ford algorithm and
            involves calendar file (ICS) parsing.
          </p>
          <p>
            This is a WIP with{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/pablo-fiori-60311a12a"
            >
              Pablo Fiori
            </a>
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default QCardScheduler;
