import React from "react";
import Project from "../../Project";

const KeyDB = ({ tags }) => {
  return (
    <Project
      title="KeyDB"
      description="OCaml-based Text DBMS"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://pages.github.coecis.cornell.edu/bfs45/keyDB/MS0_%20Charter.pdf"
          >
            Charter
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://pages.github.coecis.cornell.edu/bfs45/keyDB/MS1_Report.pdf"
          >
            Report 1
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://pages.github.coecis.cornell.edu/bfs45/keyDB/MS2_Report.pdf"
          >
            Report 2
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://pages.github.coecis.cornell.edu/bfs45/keyDB/MS3%20Report.pdf"
          >
            Report 3
          </a>
          <p>
            This was my final project for{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cs.cornell.edu/courses/cs3110"
            >
              CS 3110 Functional Programming
            </a>
            . I collaborated with{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/donallowsleywilliams"
            >
              Donal Lowsley-Williams
            </a>
            ; unfortunately, our third partner dropped out early in the
            semester. In two-week sprints, we built a SQL database management
            system using a text file system to store data. Users could interact
            with the DBMS by inputting commands in a REPL, which were then lexed
            and parsed. We developed the system from scratch, without any
            third-party libraries.
          </p>
          <p>
            A major focus of the project was designing the appropriate data
            structure and converting it to and from text. We implemented all the
            SQL table, row, and column functions, as well as conditional select
            and a command log. We even went beyond the scope of our{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://pages.github.coecis.cornell.edu/bfs45/keyDB/MS0_%20Charter.pdf"
            >
              initial proposal
            </a>{" "}
            and added summary functions. We also focused heavily on error and
            edge-case handling, and wrote a huge test suite. The project code is
            private, but you can read more about our accomplishments and
            pitfalls in our reports. You can see some demo commands in{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://pages.github.coecis.cornell.edu/bfs45/keyDB/src/INSTALL.txt"
            >
              this text file
            </a>
            .
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default KeyDB;
