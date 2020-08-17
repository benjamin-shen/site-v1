import React from "react";
import Project from "../../Project";

const Apt401B = () => {
  return (
    <Project
      title="Apt401B"
      description="Covid-19 App for Apartment Visitors"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/apartment"
          >
            Github
          </a>{" "}
          {/* |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://apt.benjaminshen.com"
          >
            Demo
          </a> */}
          <p>
            In the era of a global pandemic, many students are wary of in-person
            house visits and socialization. Some of my friends and I discussed a
            logging system for apartment visitors, for contact-tracing purposes
            if someone got sick. I built this idea out into a more functional
            apartment app, and made it open-source so anyone could deploy and
            configure it on their own. Anyone can ring the doorbell without
            signing in. Guests can create an account with a guest password and
            view guest-related information. Housemates can edit notes and view
            logs.
          </p>
          <p>
            The app is built in React and Firebase/GCP. I used Firebase for its
            hosting, authentication, cloud functions, and cloud firestore. I
            send doorbell notifications using{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://nodemailer.com/about/"
            >
              Nodemailer
            </a>{" "}
            (via Gmail) and{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dev.groupme.com/bots"
            >
              Groupme
            </a>{" "}
            (via a bot).
          </p>
        </div>
      }
      wip={true}
    />
  );
};

export default Apt401B;
