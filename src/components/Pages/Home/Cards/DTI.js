import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Home";
import flux from "assets/images/flux.png";

const DTI = () => {
  return (
    <Card
      image={flux}
      title="Design & Tech Initiative"
      description={
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.cornelldti.org/projects/flux/"
          >
            Flux
          </a>
          <br />{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.cornelldti.org/projects/courseplan/"
          >
            CoursePlan
          </a>
        </p>
      }
      info={
        <div>
          <p>
            I'm on the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cornelldti.org"
            >
              Cornell Design &amp; Tech Initative
            </a>
            , an Engineering project team that builds apps and software for the
            community.
          </p>
          <p>
            I've learned a lot about app development and design from the
            projects I've worked on, such as:
          </p>
          <ul>
            <li>
              <Link to="/projects/flux">Flux</Link>
              , a mobile app for displaying dining hall densities and menus.
              <br />
              <em>Built with Express (backend)</em>
            </li>
            <li>
              <Link to="/projects/flux-fitness">Flux Fitness</Link>
              , a web app for recording fitness center occupancy.
              <br />
              <em>Built with Vue and Firebase</em>
            </li>
            <li>
              <Link to="/projects/courseplan">CoursePlan</Link>
              , a web app for planning courses and requirements at Cornell.
              <br />
              <em>Built with Vue and Firebase</em>
            </li>
          </ul>
        </div>
      }
    />
  );
};

export default DTI;
