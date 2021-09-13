import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Home";
import glozz from "assets/images/glozz.jpg";

const Singing = () => {
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
            Singing is one of my biggest hobbies outside of computer science! I
            found wonderful singing communities at Stuyvesant and Cornell.
          </p>
          <p>
            The Glee Club has been my motivation for many projects, including:
          </p>
          <ul>
            <li>
              <Link to="/projects/dbot">Dbot</Link>, a bot for the GLOZZ (Glee
              Club and Chorus 2022) group chat on Groupme.
              <br />
              <em>Built with Python</em>
            </li>
            <li>
              <Link to="/projects/glozz-personality-test">
                GLOZZ Personality Quiz
              </Link>
              , a multiple-choice quiz to see similarity rankings with members
              of GLOZZ. <br />
              <em>Built with Python and JavaScript</em>
            </li>
          </ul>
        </div>
      }
    />
  );
};

export default Singing;
