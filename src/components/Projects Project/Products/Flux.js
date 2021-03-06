import React from "react";
import { Link } from "react-router-dom";
import Project from "../../Project";

const Flux = ({ wip }) => {
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
            Flux is a mobile app for iOS and Android. Last year, I was the sole
            back-end developer for the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cornelldti.org/projects/flux"
            >
              Flux subteam
            </a>{" "}
            (previously Campus Density) on{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cornelldti.org"
            >
              Cornell DTI
            </a>
            . Our last major release, we focused on interpolating dining hall
            densities from swipe data and displaying relevant facility
            information (like open hours and historical density data). For our
            new release, we've added menus and started working on adding{" "}
            <Link to="./flux-fitness">fitness facility densities</Link>.
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
            Database and Cloud Functions. I have since transferred to{" "}
            <Link to="./courseplan">Courseplan</Link>, but I'm still
            contributing to Flux by onboarding/mentoring new backend developers
            and reviewing PRs.
          </p>
        </div>
      }
      wip={wip}
    />
  );
};

export default Flux;
