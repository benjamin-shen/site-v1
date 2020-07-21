import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Collapsible, CollapsibleItem } from "react-materialize";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Project.css";
import "../styles/Projects.css";

// Applications
import Dbot from "./Projects Project/Applications/Dbot";
import GlozzPersonalityTest from "./Projects Project/Applications/GlozzPersonalityTest";
import WebTest from "./Projects Project/Applications/WebTest";
import Admissions2019 from "./Projects Project/Applications/Admissions2019";
// Products
import Flux from "./Projects Project/Products/Flux";
import FluxFitness from "./Projects Project/Products/FluxFitness";
// Games
import Rubato from "./Projects Project/Games/Rubato";
// Miscellaneous
import KeyDB from "./Projects Project/Miscellaneous/KeyDB";

export const Project = ({ title, description, content }) => {
  return (
    <div id={title && title.replace(/\s+/g, "-").toLowerCase()}>
      <h3>{title && title.toUpperCase()}</h3>
      <Collapsible accordion={false}>
        <CollapsibleItem
          expanded={false}
          header={
            <div className="header-content">
              <i className="material-icons right">expand_more</i>
              <p>{description}</p>
            </div>
          }
          node="div"
        >
          {content || "...coming soon!"}
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
};

// TODO add side nav
const Projects = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="projects">
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Benjamin Shen's Projects." />
        <meta property="og:title" content="Benjamin Shen - Projects" />
        <meta property="og:description" content="Benjamin Shen's Projects." />
      </Helmet>
      <Header />
      <main className="container">
        <div className="projects-content">
          <div>
            <h2>Applications</h2>
            <Dbot />
            <GlozzPersonalityTest />
            <WebTest />
            <Admissions2019 />
          </div>
          <div>
            <h2>Products</h2>
            <Flux />
            <FluxFitness />
          </div>
          <div>
            <h2>Games</h2>
            <Rubato />
          </div>
          <div>
            <h2>Miscellaneous</h2>
            <KeyDB />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
