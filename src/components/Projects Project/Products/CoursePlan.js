import React from "react";
import Project from "../../Project";

const CoursePlan = ({ wip }) => {
  return (
    <Project
      title="CoursePlan"
      description="Web App for Planning Courses at Cornell"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/course-plan"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://courseplan.io/"
          >
            Website
          </a>
          <p>
            CoursePlan is a web app for students to easily plan their semester
            courses and requirements. I am a new developer for the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cornelldti.org/projects/courseplan"
            >
              CoursePlan subteam
            </a>{" "}
            on{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cornelldti.org"
            >
              Cornell DTI
            </a>
            .
          </p>
        </div>
      }
      wip={wip}
    />
  );
};

export default CoursePlan;
