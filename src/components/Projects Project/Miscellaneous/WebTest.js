import React from "react";
import Project from "../../Project";

const WebTest = ({ wip }) => {
  return (
    <Project
      title="Web Test"
      description="Online Testing System"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/web-test"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://benjamin-shen.github.io/web-test"
          >
            Pages
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://introcs-finalproject.herokuapp.com/login"
          >
            Demo
          </a>
          <p>
            This project is a tribute to my first Computer Science class at
            Stuyvesant High School (in Spring 2016). We learned basic Python
            scripting and HTML/CSS, and then were given the opportunity to
            create any web project we could think of. My friend Albert and I
            created an in-browser testing system, with a text file database and
            very basic authentication system. We built it with{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.python.org/2/library/cgi.html"
            >
              CGI scripting
            </a>{" "}
            in Python 2.
          </p>
          <p>
            I rewrote a significant portion of the code to be served by Python
            Flask on Heroku, instead of relying on CGI and Apache. I also made
            many syntactic changes to be able to run it with Python 3. I
            intentionally didn't make any design or functionality changes. Demo
            credentials can be found in plain text on{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/benjamin-shen/web-test/tree/master/client/data"
            >
              Github
            </a>{" "}
            or{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://benjamin-shen.github.io/web-test"
            >
              Pages
            </a>
            .
          </p>
        </div>
      }
      wip={wip}
    />
  );
};

export default WebTest;
