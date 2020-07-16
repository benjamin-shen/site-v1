import React, { useEffect } from "react";
import "../styles/Project.css";
import "../styles/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import glozz from "../images/glozz.jpg";
import flux from "../images/flux.png";

const Project = ({ img, title, description, info }) => {
  return (
    <div className="card-box">
      <div className="card medium">
        <div className="card-image waves-effect waves-block waves-light">
          {img && (
            <img className="activator" src={img} alt={img + " Project Image"} />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator">
            {title && title.toUpperCase()}
          </span>
          {description}
        </div>
        <div className="card-reveal">
          <span className="card-title">
            {title}
            <i className="material-icons right x-icon">close</i>
          </span>
          <span className="left-align">{info}</span>
        </div>
      </div>
    </div>
  );
};

const HomeText = () => {
  return (
    <div>
      <h2>Hey, I'm Ben!</h2>
      <p>
        I'm a rising junior at{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.cornell.edu"
        >
          Cornell University
        </a>{" "}
        majoring in{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.cs.cornell.edu"
        >
          Computer Science
        </a>{" "}
        with interests in Game Design and Mechanical Engineering. I value human
        connections and I'm driven by people.
      </p>
      <p>Check out some of my project topics here!</p>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="home">
      <Header />
      <main className="container">
        <HomeText />
        <div id="projects" className="center">
          <Project
            img={glozz}
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
                  This is one of my biggest and closest friend groups at
                  Cornell. We're all from various backgrounds, connected by our
                  love for singing.
                </p>
                <p>
                  Glozz has been my motivation for many independent scripts and
                  projects. Major ones include:
                </p>
                <ul>
                  <li>
                    <strong>Dbot</strong>, a bot for our group chat on Groupme.{" "}
                    <br />
                    <em>Built with Python.</em>
                  </li>
                  <li>
                    <strong>GLOZZ Personality Quiz</strong>, a short
                    multiple-choice quiz to see which members of the group you
                    are most similar to. <br />
                    <em>Built with Python and JavaScript.</em>
                  </li>
                </ul>
              </div>
            }
          />
          <Project
            img={flux}
            title="Flux"
            description={
              <p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.cornelldti.org"
                >
                  Cornell DTI
                </a>{" "}
                Project team <br />
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.cornelldti.org/projects/flux/"
                >
                  Flux Subteam
                </a>
                <br /> Flux iOS, Flux Android, Flux Fitness
              </p>
            }
            info={
              <div>
                <p>
                  I'm on the Cornell Design &amp; Tech Initative at Cornell, as
                  a back-end developer for Flux.
                </p>
                <p>
                  I've gained a lot about app development experience from being
                  the team. I worked primarily on the back end for the Flux
                  mobile apps, and the full stack for the Flux Fitness web app.
                  Repositories I've contributed to include:
                </p>
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/cornell-dti/campus-density-backend"
                    >
                      campus-density-backend
                    </a>{" "}
                    (<em>Flux mobile app back end in Node.js</em>)
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/cornell-dti/flux-functions"
                    >
                      flux-functions
                    </a>{" "}
                    (<em>Flux mobile app Cloud Functions in Node.js</em>)
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/cornell-dti/flux-fitness"
                    >
                      flux-fitness
                    </a>{" "}
                    (<em>Flux Fitness web app in Vue.js</em>)
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/benjamin-shen/flux-fitness_historic-data"
                    >
                      flux-fitness_historic-data
                    </a>{" "}
                    (<em>Flux Fitness backend scripts in Python</em>)
                  </li>
                </ul>
              </div>
            }
          />
          {/*<Project />
          <Project />*/}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
