import React from "react";
import { Link } from "react-router-dom";
import Project from "../../Project";

const FluxFitness = ({ tags }) => {
  return (
    <Project
      title="Flux Fitness"
      description="Admin-facing Web App for Fitness Facility Crowdedness"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/flux-fitness"
          >
            Github
          </a>{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/flux-fitness/pulls?q=is%3Apr+author%3Abenjamin-shen"
          >
            [PR]
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://flux.fitness.cornelldti.org"
          >
            Website
          </a>
          <p>
            Flux Fitness is a web app for Cornell Fitness admins and workers,
            headed by the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cornelldti.org/projects/flux"
            >
              Flux subteam
            </a>{" "}
            on{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cornelldti.org"
            >
              Cornell DTI
            </a>
            . Cornell's fitness facilities currently record occupancy data every
            thirty minutes by hand on spreadsheets; the goal of our app is to
            provide an interface to more easily submit and view data and
            analytics. Depending on when gyms can open publicly, our long-term
            goal is to integrate their equipment and crowdedness data into the{" "}
            <Link to="./flux">Flux mobile apps</Link>. I worked full stack on
            this project during my time on Flux.
          </p>
          <p>
            Flux Fitness is written with Vue/NodeJS and the project uses
            Firebase/GCP. I've contributed to the Vue front end, and built most
            of the back end. This includes the authentication, the serialized
            data flow from the form to the database collections, and the
            spreadsheet generation for the export functionality. I worked
            primarily with the Firebase Realtime Database and Cloud Storage.
            This project has potential to transition to a reservation system for
            Cornell Fitness.
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default FluxFitness;
