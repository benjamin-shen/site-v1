import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Card.css";
import "../styles/Home.css";
import CardGlozz from "./Home Cards/CardGlozz";
import CardFlux from "./Home Cards/CardFlux";

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
        I'm a college student who's interested in web, app, and game
        development. I also have experience in CRM and software development. I
        value friendships and I'm driven by people.{" "}
        <em>
          See my <Link to="/about">About</Link> page for more about me.
        </em>
      </p>
      <p>
        Check out some of my project topics below! Click the cards for more
        info.{" "}
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
          <CardGlozz />
          <CardFlux />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
