import React from "react";
import { Card } from "../Home";
import glozz from "../../assets/images/glozz.jpg";

const CardGlozz = () => {
  return (
    <Card
      image={glozz}
      title="Glozz"
      description={
        <p>
          Cornell University <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.gleeclub.com"
          >
            Glee Club
          </a>{" "}
          and{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://cuchorus.com"
          >
            Chorus
          </a>
          <br />
          Class of 2022
        </p>
      }
      info={
        <div>
          <p>
            This is one of my biggest and closest friend groups at Cornell.
            We're all from various backgrounds, connected by our love for
            singing.
          </p>
          <p>
            Glozz has been my motivation for many independent scripts and
            projects. Major ones include:
          </p>
          <ul>
            <li>
              <strong>Dbot</strong>, a bot for our group chat on Groupme.
              <br />
              <em>Built with Python.</em>
            </li>
            <li>
              <strong>GLOZZ Personality Quiz</strong>, a multiple-choice quiz to
              see which members of the group you are most similar to. <br />
              <em>Built with Python and JavaScript.</em>
            </li>
          </ul>
        </div>
      }
    />
  );
};

export default CardGlozz;
