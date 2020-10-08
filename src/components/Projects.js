import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ModalContainer } from "react-router-modal";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Projects.css";

// Applications
import Apt401B from "./Projects Project/Applications/Apt401B";
import Dbot from "./Projects Project/Applications/Dbot";
import GlozzPersonalityTest from "./Projects Project/Applications/GlozzPersonalityTest";
import Admissions2019 from "./Projects Project/Applications/Admissions2019";
// Products
import CornellZoomHub from "./Projects Project/Products/CornellZoomHub";
import CoursePlan from "./Projects Project/Products/CoursePlan";
import Flux from "./Projects Project/Products/Flux";
import FluxFitness from "./Projects Project/Products/FluxFitness";
import Way from "./Projects Project/Products/Way";
// Games
import Rubato from "./Projects Project/Games/Rubato";
// Miscellaneous
import Website from "./Projects Project/Miscellaneous/Website";
import Blog from "./Projects Project/Miscellaneous/Blog";
import KeyDB from "./Projects Project/Miscellaneous/KeyDB";
import WebTest from "./Projects Project/Miscellaneous/WebTest";

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
        <ModalContainer />
        <div className="projects-content">
          <h2>Applications</h2>
          <div className="project-group">
            <Apt401B wip />
            <Dbot />
            <GlozzPersonalityTest />
            <Admissions2019 />
          </div>
          <h2>Products</h2>
          <div className="project-group">
            <CornellZoomHub wip />
            <CoursePlan wip />
            <Flux />
            <FluxFitness />
            <Way wip />
          </div>
          <h2>Games</h2>
          <div className="project-group">
            <Rubato />
          </div>
          <h2>Miscellaneous</h2>
          <div className="project-group">
            <Website />
            <Blog wip />
            <KeyDB />
            <WebTest />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
