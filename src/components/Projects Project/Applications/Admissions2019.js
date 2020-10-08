import React from "react";
import Project from "../../Project";

const Admissions2019 = ({ wip }) => {
  return (
    <Project
      title="Admissions2019"
      description="Testing Console for Admissions Application Administrators"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/admissions2019"
          >
            Github
          </a>
          <p>
            I created this independently to try to facilitate the Admissions
            Application 2019 project during my Salesforce Administrator work at
            the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.johnson.cornell.edu"
              title="Samuel Curtis Johnson Graduate School of Management"
            >
              SC JGSM
            </a>
            . Different testing criteria are inputted into a Google Sheet, and
            the interface is dynamically generated with vanilla JavaScript.
            There is an option to edit tasks with things like title, steps,
            expected results, and whether the test passed. There is also a
            visual indicator highlighting the status of completed tests.
          </p>
          <p>
            This application is built with NodeJS/Express and deployed to
            Heroku. It uses{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/http-auth"
            >
              http-auth
            </a>{" "}
            for basic HTTP authentication, so that only admins working on the
            Admissions project can access it. It uses{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/google-spreadsheet"
            >
              google-spreadsheet v3
            </a>{" "}
            (soon to be deprecated) as a quasi-database that can be edited
            easily by non-developers. I don't plan on maintaining this
            application, since I didn't focus on scalability and have since
            discovered JS frameworks that significantly simplify developing such
            web apps.
          </p>
        </div>
      }
      wip={wip}
    />
  );
};

export default Admissions2019;
