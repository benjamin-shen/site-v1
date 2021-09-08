import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ModalContainer } from "react-router-modal";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Projects.css";

// Applications
import Apartment from "./Projects/Applications/Apartment";
import Dbot from "./Projects/Applications/Dbot";
import GlozzPersonalityTest from "./Projects/Applications/GlozzPersonalityTest";
// Products
import CornellZoomHub from "./Projects/Products/CornellZoomHub";
import CoursePlan from "./Projects/Products/CoursePlan";
import Flux from "./Projects/Products/Flux";
import FluxFitness from "./Projects/Products/FluxFitness";
import Way from "./Projects/Products/Way";
// Games
import Rubato from "./Projects/Games/Rubato";
import Ghosted from "./Projects/Games/Ghosted";
// Miscellaneous
import Website from "./Projects/Miscellaneous/Website";
import Blog from "./Projects/Miscellaneous/Blog";
import KeyDB from "./Projects/Miscellaneous/KeyDB";
import WebTest from "./Projects/Miscellaneous/WebTest";

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
            <Apartment />
            <Dbot />
            <GlozzPersonalityTest />
          </div>
          <h2>Products</h2>
          <div className="project-group">
            <CornellZoomHub tags={["wip"]} />
            <CoursePlan tags={["wip"]} />
            <Flux />
            <FluxFitness />
            <Way tags={["wip"]} />
          </div>
          <h2>Games</h2>
          <div className="project-group">
            <Rubato />
            <Ghosted />
          </div>
          <h2>Miscellaneous</h2>
          <div className="project-group">
            <Website />
            <Blog tags={["wip"]} />
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
