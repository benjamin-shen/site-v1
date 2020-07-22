import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/About.css";
import headshot from "../assets/images/bfs45-transparent.png";

const cssShapes = {
  shapeOutside: "circle()",
  shapeThreshold: 1,
  shapeMargin: "5px",
};

const AboutText = ({ mobile }) => {
  return (
    <div>
      <div
        className={
          "about-content " +
          (mobile ? "hide-on-med-and-up" : "hide-on-small-and-down")
        }
      >
        <p>
          My full name is Benjamin Shen, but my friends call me Ben. I'm a
          rising junior at{" "}
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
          </a>
          . I like people, music, and food (in that order).
        </p>
        <p>
          I was born and raised in New York City. My interests in technology
          began as a kid and followed me through{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://stuy.enschool.org"
          >
            Stuyvesant
          </a>
          , a large specialized high school in Downtown Manhattan. My favorite
          subject was math, until I took my first Intro to Computer Science
          class. Ever since, I've been drawn to the potential that my code could
          make the world a happier place.
        </p>
        <p>
          My academic interests in the{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.engineering.cornell.edu"
          >
            College of Engineering
          </a>{" "}
          are relatively broad, ranging from Medicine to Physics to Computer
          Science. I love to learn about new fields; within Engineering CS, I'm
          particularly interested in Robotics, Machine Learning, and
          Cybersecurity. I'm also dabbling in Game Design/Development.
        </p>
        <p>
          Outside of academics, I'm part of{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.cornelldti.org"
          >
            Cornell DTI
          </a>
          , a Cornell Engineering project team that focuses on building software
          and giving back to the community. I'm a back-end developer for{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.cornelldti.org/projects/flux/"
          >
            Flux
          </a>
          . I've been working throughout the summer to improve and adapt our
          product to social distancing and unprecedented institutional policies.
        </p>
        <p>
          I also enjoy singing in my free time. I sang in a high school choir
          and was president of my a cappella group; now I'm singing in the{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.gleeclub.com"
          >
            Cornell University Glee Club
          </a>{" "}
          and{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://chordials.com"
          >
            The Chordials
          </a>
          . I try to give back to these groups by doing publicity work. If you
          like a cappella music, you should check out The Chordials'
          recently-released album{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://open.spotify.com/album/5A1S6RL7eUzwhTHMzETDT8"
          >
            <em>Fire &amp; Concrete</em>
          </a>
          !
        </p>
        <p>
          My other hobbies include cooking, photography, tennis, exploring
          nature, and playing videogames. My favorite game is{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.celestegame.com"
          >
            Celeste
          </a>
          , my favorite food is the egg tart, and my favorite summertime drink
          is iced tea. My dislikes include driving long distances, filing taxes,
          and watching movies with rushed endings.
        </p>
        <p>
          I'm currently a full-time student with a part-time job, but I'm always
          looking for new opportunities in the tech field. You can view my{" "}
          <Link to="/resume">Resume</Link> or{" "}
          <Link to="/projects">Projects</Link> to see if I'm a good fit for you.
          If you have freelance/startup work or just want to chat with a
          developer, you can <Link to="/contact">Contact</Link> me and I'd love
          to talk!
        </p>
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="about">
      <Helmet>
        <title>About</title>
        <meta name="description" content="About Benjamin Shen." />
        <meta property="og:title" content="Benjamin Shen - About" />
        <meta property="og:description" content="About Benjamin Shen." />
      </Helmet>
      <Header />
      <main className="container">
        <h2>About Me</h2>
        <AboutText mobile={true} />
        <img
          id="headshot"
          src={headshot}
          alt="Benjamin Shen Headshot"
          style={cssShapes}
          onerror='this.style.display = "none"'
        />
        <AboutText />
      </main>
      <Footer />
    </div>
  );
};

export default About;
