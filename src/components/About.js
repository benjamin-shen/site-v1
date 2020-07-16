import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/About.css";

const AboutText = () => {
  return (
    <div>
      <h2>Hello World</h2>
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
        with interests in{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.cs.cornell.edu/undergrad/minors/game-design-minor"
        >
          Game Design
        </a>
        . I value friendships and I'm driven by people.
      </p>
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
        <AboutText />
      </main>
      <Footer />
    </div>
  );
};

export default About;
