import React from "react";
import Project from "../../Project";

const Apt401B = () => {
  return (
    <Project
      title="Apt401B"
      description="Covid-19 App for Apartment Visitors"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/apartment"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://apt.benjaminshen.com"
          >
            Demo
          </a>
          <p></p>
          <p></p>
        </div>
      }
      wip={true}
    />
  );
};

export default Apt401B;
