import React from "react";
import Project from "../../Project";

const Way = ({ tags }) => {
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
            Way is a Cornell-founded startup based in Ithaca, NY. There is a
            mobile and web app for contactless ordering and payment, as well as
            a mobile app for merchants/restaurants. I've written scripts for
            testing and contributed to devops, as well as the merchant,
            ordering, and user backend microservices. The backend is written in
            Python Flask and uses MongoDB as its database.
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default Way;
