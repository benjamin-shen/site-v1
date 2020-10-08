import React from "react";
import Project from "../../Project";

const Way = ({ wip }) => {
  return (
    <Project
      title="Way"
      description="Web and Mobile Apps for Contactless Payment"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://paywithway.com"
          >
            Website
          </a>
          <p>
            I am a backend developer for Way, a Cornell-founded startup based in
            Ithaca, NY. There is a mobile and web app for contactless ordering
            and payment, as well as a mobile app for merchants/restaurants. I've
            written scripts for testing and am currently contributing to devops,
            as well as the merchant, ordering, and user backend microservices.
          </p>
          <p>
            The back end is written in Python Flask. It uses MongoDB as its
            database.
          </p>
        </div>
      }
      wip={wip}
    />
  );
};

export default Way;
