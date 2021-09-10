import React from "react";
import Project from "../../Pages/Projects/Project";

const SiteV2 = ({ tags }) => {
  return (
    <Project
      title="Site-v2"
      description="Personal Website"
      content={
        <div>
          {/* <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/site-v2"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://site-v2.benjaminshen.com"
          >
            Website
          </a> */}
          <p>A revamp of my website!</p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default SiteV2;
