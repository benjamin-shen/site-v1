import React from "react";
import Project from "../../Project";

const Rubato = ({ tags }) => {
  return (
    <Project
      title="Rubato"
      description="2D Combat Platformer with Time-Freeze Mechanic"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/glassboxgames/rubato/"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://glassboxgames.github.io/rubato-releases/"
          >
            Releases
          </a>
          <p>
            Rubato is a 2D side-view combat platformer with clean controls and
            an immersive narrative. The player controls Adagio, whose main
            mechanic is being able to "steal" time back from enemies and freeze
            them in the environment. This lends itself to puzzle and action
            sections, both requiring precise movement to advance. I was a
            programmer in Glassbox Games, an eight-student team in the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cs.cornell.edu/courses/cs3152/2020sp"
            >
              CS 3152
            </a>{" "}
            Game Design course.
          </p>
          <p>
            The game is written with{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://libgdx.badlogicgames.com"
            >
              libGDX
            </a>{" "}
            (Java). I focused on the following aspects of the game: canvas
            drawing and game modes, developer and debug modes, fade transitions,
            backgrounds and parallax scrolling, cutscenes and chapter
            completion, tutorial tooltips, player states (run, jump, dash,
            attack, wall climb, wall slide, parry, death), and level
            design/polish. I also independently built the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://pages.github.coecis.cornell.edu/glassboxgames/rubato-releases"
            >
              rubato-releases site
            </a>
            .
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default Rubato;
