import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";
import "styles/Card.css";
import "styles/Home.css";
import CardSinging from "./Home Cards/CardSinging";
import CardDTI from "./Home Cards/CardDTI";

export const Card = ({ image, title, description, info }) => {
  return (
    <div className="card-box">
      <div className="card medium">
        <div className="card-image waves-effect waves-block waves-light">
          {image && (
            <img
              className="activator"
              src={image}
              alt={title + " Card Image"}
            />
          )}
        </div>
        <div className="card-content valign-wrapper">
          <div className="card-content-text center">
            <div className="card-title activator">
              {title && title.toUpperCase()}
            </div>
            {description}
          </div>
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
        I'm a final-semester undergraduate student who's interested in computer
        science and software development. In academia, I'm drawn to Game Design,
        Computer Graphics, and Machine Learning.{" "}
        <em>
          See my <Link to="/about">About</Link> page or{" "}
          <Link to="/resume">Resume</Link> for more information.
        </em>
      </p>
      <p>
        Check out some of my activities below! Click the cards for more info.{" "}
        <em>
          Check out my <Link to="projects">Projects</Link> page for a larger
          collection of my work.
        </em>
      </p>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="home">
      <Helmet>
        <title>Benjamin Shen</title>
        <meta name="description" content="Benjamin Shen's personal website." />
        <meta property="og:title" content="Benjamin Shen - Home" />
        <meta
          property="og:description"
          content="Benjamin Shen's personal website"
        />
      </Helmet>
      <Header />
      <main className="container">
        <HomeText />
        <div id="cards" className="center">
          <CardDTI />
          <CardSinging />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
