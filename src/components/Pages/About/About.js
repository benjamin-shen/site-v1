import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";
import Emoji from "../Emoji";
import "styles/About.css";
import headshot from "assets/images/bfs45-transparent.png";

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
          Hello world! I'm a student at{" "}
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
          and minoring in{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://infosci.cornell.edu"
          >
            Information Science
          </a>
          . Thanks for visiting my website. <Emoji symbol="😊" label="smile" />
        </p>
        <p>
          I was born and raised in New York City. My interests in technology
          started as a kid and followed me through{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://stuy.enschool.org"
          >
            Stuyvesant
          </a>
          , a large specialized high school in Downtown Manhattan. I've always
          been drawn to the potential that my code could make the world a better
          place.
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
          are broad, ranging from Medicine to Physics to Computer Science. I
          love to learn about new fields; within Engineering CS, I'm
          particularly interested in Game Design, Computer Graphics, and Machine
          Learning.
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
          and giving back to the community. I've worked on projects like{" "}
          <Link to="/projects/courseplan">CoursePlan</Link> and{" "}
          <Link to="/projects/flux">Flux</Link>. I also work on personal
          projects in my free time; you can view some of them in the{" "}
          <Link to="/projects">Projects</Link> tab.
        </p>
        <p>
          I also really enjoy singing. I sang in a high school choir and was
          president of my a cappella group; in college, I sang in the{" "}
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
          . My other hobbies include tennis, food, nature, and video games. My
          favorite game is{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.celestegame.com"
          >
            Celeste
          </a>
          , my favorite food is egg tart, and my favorite summertime drink is
          iced tea.
        </p>
        <p>
          If you are a recruiter, you can view my{" "}
          <Link to="/resume">Resume</Link> to see if we might be a good fit. If
          you want to have a coffee chat, you can{" "}
          <Link to="/contact">Contact</Link> me and I'd love to talk!
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
        />
        <AboutText />
      </main>
      <Footer />
    </div>
  );
};

export default About;
