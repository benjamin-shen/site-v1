import React from "react";
import { Project } from "../../Projects";

const GlozzPersonalityTest = () => {
  return (
    <Project
      title="Glozz Personality Test"
      description="Multiple-Choice Personality Test"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/glozzpersonalitytest"
          >
            Github
          </a>
        </div>
      }
    />
  );
};

export default GlozzPersonalityTest;
