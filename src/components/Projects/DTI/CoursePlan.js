import React from "react";
import Project from "../../Pages/Projects/Project";

const CoursePlan = ({ tags }) => {
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
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/course-plan/pulls?q=is%3Apr+author%3Abenjamin-shen"
          >
            [PR]
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
            courses and requirements. I was a full stack developer for the{" "}
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
            . The app provides an intuitive user interface with integrations
            with the Course Roster API and{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cornelldti.org/projects/reviews"
            >
              CUReviews
            </a>
            . We have a home grown graph-based algorithm for computing student
            requirements for each of the major, minor, and grad programs we
            support.
          </p>
          <p>
            Flux is built with Vue/Vuex and Firebase. I worked primarily on
            features like AP/IB credits, selectable requirements (for ambiguous
            fulfillments), and overriden requirements. I also improved the
            requirements graph algorithm and contributed to the frontend UI/UX.
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default CoursePlan;
