import React from "react";
import Project from "../../Project";

const Flux = ({ tags }) => {
  return (
    <Project
      title="Flux"
      description="Mobile Apps for Dining Hall Menus and Crowdedness"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/campus-density-backend"
          >
            Backend Github
          </a>{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/campus-density-backend/pulls?q=is%3Apr+author%3Abenjamin-shen"
          >
            [PR]
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/flux-functions"
          >
            Functions Github
          </a>{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/flux-functions/pulls?q=is%3Apr+author%3Abenjamin-shen"
          >
            [PR]
          </a>
          <p>
            Flux is a mobile app for iOS and Android. I contributed as a backend
            developer for the{" "}
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
            . The app interpolates and predicts dining hall densities from swipe
            data and displays relevant facility information (like open hours and
            historical density data).
          </p>
          <p>
            Flux's back end is written in NodeJS and the project uses
            Firebase/GCP. I've implemented menus using the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://now.dining.cornell.edu/api/1.0/dining/eateries.json"
            >
              Cornell Dining API
            </a>
            , improved the mobile app endpoints, and refactored most of the
            routes and queries.
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default Flux;
