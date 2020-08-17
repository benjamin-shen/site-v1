import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Home";
import flux from "../../assets/images/flux.png";

const CardFlux = () => {
  return (
    <Card
      image={flux}
      title="Flux"
      description={
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.cornelldti.org"
          >
            Cornell DTI
          </a>{" "}
          Project team <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.cornelldti.org/projects/flux/"
          >
            Flux Subteam
          </a>
          <br /> Flux iOS, Flux Android, Flux Fitness
        </p>
      }
      info={
        <div>
          <p>
            I'm on the Cornell Design &amp; Tech Initative at Cornell, as a
            back-end developer for Flux.
          </p>
          <p>
            I've learned a lot about app development from being on the team. I
            worked primarily on the back end for the{" "}
            <Link to="/projects/flux">Flux</Link> mobile apps, and the full
            stack for the <Link to="/projects/flux-fitness">Flux Fitness</Link>{" "}
            web app. Repositories I've contributed to include:
          </p>
          <ul>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/cornell-dti/campus-density-backend"
              >
                campus-density-backend
              </a>{" "}
              (<em>Flux mobile app back end in Express.js</em>)
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/cornell-dti/flux-functions"
              >
                flux-functions
              </a>{" "}
              (<em>Flux mobile app Cloud Functions in Node.js</em>)
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/cornell-dti/flux-fitness"
              >
                flux-fitness
              </a>{" "}
              (<em>Flux Fitness web app in Vue.js</em>)
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/benjamin-shen/flux-fitness_historic-data"
              >
                flux-fitness_historic-data
              </a>{" "}
              (<em>Flux Fitness backend scripts in Python</em>)
            </li>
          </ul>
        </div>
      }
    />
  );
};

export default CardFlux;
