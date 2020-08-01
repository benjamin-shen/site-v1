import React from "react";
import Project from "../../Project";

const WebTest = () => {
  return (
    <Project
      title="Web Test"
      description="Online Testing System"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/web-test"
          >
            Github
          </a>
        </div>
      }
    />
  );
};

export default WebTest;
