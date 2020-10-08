import React from "react";
import { Link } from "react-router-dom";
import Project from "../../Project";

const CornellZoomHub = ({ wip }) => {
  return (
    <Project
      title="Cornell Zoom Hub"
      description="Web App for Managing Virtual Learning Links at Cornell"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/cornellzoomhub"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://cornell-zoom-hub.web.app"
          >
            Website
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/watch?v=D_3ykpsz8uU"
          >
            Pitch
          </a>
          <p>
            Cornell Zoom Hub is a web app that allows Cornell users to
            consolidate and easily access their virtual learning links. It also
            allows professors (or anyone with a valid Cornell netid) to create
            and distribute their links. I brainstormed this idea and further
            worked on this project with{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ashneeldas/"
            >
              Ashneel Das
            </a>{" "}
            and{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/yvonne-chan-yc/"
            >
              Yvonne Chan
            </a>{" "}
            during{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://hackourcampus.com"
            >
              Hack Our Campus
            </a>
            , a virtual hackathon based in Cornell.
          </p>
          <p>
            The app is built with React and Firebase/GCP. It uses Firebase for
            its hosting, authentication, and cloud firestore.{" "}
          </p>
        </div>
      }
      wip={wip}
    />
  );
};

export default CornellZoomHub;
