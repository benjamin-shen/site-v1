import React from "react";
import Project from "../../Pages/Projects/Project";

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
            Flux is a mobile app for iOS and Android. I was a backend developer
            for the{" "}
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
            Firebase/GCP. Things I've done on the back end include implementing
            menus using the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://now.dining.cornell.edu/api/1.0/dining/eateries.json"
            >
              Cornell Dining API
            </a>
            , improving the mobile app endpoints, and refactoring most of the
            routes and queries. I worked primarily with the Firebase Realtime
            Database and Cloud Functions.
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default Flux;
