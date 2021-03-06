import React from "react";
import Project from "../../Project";

const Rubato = ({ wip }) => {
  return (
    <Project
      title="Rubato"
      description="2D Combat Platformer with Time-Freeze Mechanic"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://pages.github.coecis.cornell.edu/glassboxgames/rubato-releases"
          >
            Pages
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://en-ci-gdiac.coecis.cornell.edu/gallery/rubato"
          >
            GDIAC
          </a>
          <p>
            Rubato is a 2D side-view combat platformer with clean controls and
            an immersive narrative. The player controls Adagio, whose main
            mechanic is being able to "steal" time back from enemies and freeze
            them in the environment. This lends itself to puzzle and action
            sections, both requiring precise movement to advance. I was mainly a
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
            . Our codebase and documentation are private, but you can download
            and demo the game (Windows or Mac) or watch our gameplay trailers.
          </p>
        </div>
      }
      wip={wip}
    />
  );
};

export default Rubato;
