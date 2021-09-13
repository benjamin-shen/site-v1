import React from "react";
import Project from "../../Project";

const Rubato = ({ tags }) => {
  return (
    <Project
      title="Ghosted"
      description="Asymmetric Multiplayer Party Game with Mobile Support"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/starsoupgames/ghosted/"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://starsoupgames.github.io/ghosted-releases/"
          >
            Releases
          </a>{" "}
          <p>
            Ghosted is a top-down asymmetric multiplayer party game where one
            player (the Ghost) attempts to spook all the other players (the
            Pals) while they try to escape. It is compatible with mobile
            (Android/iOS) and desktop (Windows/Mac). We placed third in
            popularity at the Games showcase. I was the programming lead in Star
            Soup Games, a seven-student team in the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cs.cornell.edu/courses/cs4152/2021sp"
            >
              CS 4152
            </a>{" "}
            Advanced Game Design course.
          </p>
          <p>
            The game is written with{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cs.cornell.edu/courses/cs4152/2021sp/resources/engine/"
            >
              CUGL
            </a>{" "}
            (C++), Cornell's custom game engine. I designed the game's
            architecture, managed the programming team (creating, assigning,
            helping with tasks), made versioned releases, and led the
            development of the game. I implemented the multiplayer networking,
            drawing/graphics, game mode logic, player movement and states, and
            main player mechanics (trap, spook, unspook). I also independently
            built the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://starsoupgames.github.io/ghosted-releases/"
            >
              ghosted-releases site
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
