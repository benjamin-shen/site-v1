import React from "react";
import Project from "../../Project";

const Website = () => {
  return (
    <Project
      title="Site-v1"
      description="Personal Website"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/site-v1"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://site-v1.benjaminshen.com"
          >
            Website
          </a>
          <p>More info coming soon!</p>
        </div>
      }
    />
  );
};

export default Website;
