import React from "react";
import Project from "../../Project";

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
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://glozzpersonalitytest.herokuapp.com"
          >
            Demo
          </a>
          <p>
            "GLOZZ" stands for Glee Club and Chorus class of 2022. It's a friend
            group of around 20 people. I collected a dataset of answers by
            asking each of them to fill out a Google Form. I then built a
            personality test to match users to the GLOZZ member(s) they're most
            similar to.
          </p>
          <p>
            This web application is built with pure HTML/CSS and Javascript. I
            used Materialize CSS for basic styling. The backend is built with
            Python Flask and the server is hosted on Heroku. I used{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://gspread.readthedocs.io/en/latest/"
            >
              gspread
            </a>{" "}
            as a quasi-database, so I could easily update answers. I ordered
            each of the answer choices by similarity and predicted GLOZZ-member
            similarity by calculating n-dimensional Euclidean distances.
          </p>
        </div>
      }
    />
  );
};

export default GlozzPersonalityTest;
