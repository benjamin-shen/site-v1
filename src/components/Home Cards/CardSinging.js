import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Home";
import glozz from "../../assets/images/glozz.jpg";

const CardSinging = () => {
  return (
    <Card
      image={glozz}
      title="Singing"
      description={
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.gleeclub.com"
          >
            Cornell University Glee Club
          </a>{" "}
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://chordials.com"
          >
            The Chordials
          </a>
        </p>
      }
      info={
        <div>
          <p>
            This is one of my biggest hobbies! Here I found a wonderful
            community at Cornell, friends from various backgrounds but connected
            by our love for singing.
          </p>
          <p>
            The Glee Club has been my motivation for many independent scripts and
            projects. Major ones include:
          </p>
          <ul>
            <li>
              <Link to="/projects/dbot">Dbot</Link>, a bot for our group chat on
              Groupme.
              <br />
              <em>Built with Python</em>
            </li>
            <li>
              <Link to="/projects/glozz-personality-test">
                GLOZZ Personality Quiz
              </Link>
              , a multiple-choice quiz to see which members of the group you are
              most similar to. <br />
              <em>Built with Python and JavaScript</em>
            </li>
          </ul>
        </div>
      }
    />
  );
};

export default CardSinging;
