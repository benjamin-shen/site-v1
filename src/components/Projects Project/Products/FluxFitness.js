import React from "react";
import Project from "../../Project";

const FluxFitness = () => {
  return (
    <Project
      title="Flux Fitness"
      description="Admin-facing Web App for Fitness Facility Crowdedness"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cornell-dti/flux-fitness"
          >
            Github
          </a>
        </div>
      }
    />
  );
};

export default FluxFitness;
