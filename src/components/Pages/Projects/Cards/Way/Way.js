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
            Way was a Cornell-founded startup based in Ithaca, NY. We built a
            mobile and web app for contactless ordering and payment, as well as
            a mobile app for merchants/restaurants. We had an exclusive
            partnership with{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://2stay2go.com"
            >
              2 Stay 2 Go
            </a>{" "}
            when they first opened.
          </p>
          <p>
            I contributed to DevOps, wrote testing scripts, and helped develop
            the merchant, ordering, and user backend microservices. The backend
            is written in Python Flask and uses MongoDB as its database.
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default Way;
