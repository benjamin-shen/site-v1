import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ModalContainer } from "react-router-modal";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Projects.css";

import { TAGS } from "./constants";

// DTI
import CoursePlan from "./Projects/DTI/CoursePlan";
import Flux from "./Projects/DTI/Flux";
import FluxFitness from "./Projects/DTI/FluxFitness";
// Games
import Ghosted from "./Projects/Games/Ghosted";
import Rubato from "./Projects/Games/Rubato";
// Glozz
import Dbot from "./Projects/Glozz/Dbot";
import GlozzPersonalityTest from "./Projects/Glozz/GlozzPersonalityTest";
// Hackathon
import CornellZoomHub from "./Projects/Hackathon/CornellZoomHub";
// Miscellaneous
import Blog from "./Projects/Miscellaneous/Blog";
import SiteV1 from "./Projects/Miscellaneous/SiteV1";
import SiteV2 from "./Projects/Miscellaneous/SiteV2";
// Personal
import Apartment from "./Projects/Personal/Apartment";
// School
import KeyDB from "./Projects/School/KeyDB";
import WebTest from "./Projects/School/WebTest";

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
          <h2>Current Projects</h2>
          <p className="projects-description">
            Projects I'm currently working on
          </p>
          <div className="project-group">
            <CoursePlan tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.ORG]} />
            <SiteV2 tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.PERSONAL]} />
            {/* <QCardScheduler tags={[TAGS.COLLAB.EXTERNAL, TAGS.PURPOSE.ORG]} /> */}
            {/* <Arrangers tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} /> */}
            {/* <Arrangements tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} /> */}
          </div>
          <h2>Former Projects</h2>
          <p className="projects-description">Projects I've worked on before</p>
          <div className="project-group">
            <Flux tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.ORG]} />
            <FluxFitness tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.ORG]} />
          </div>
          <h2>Sunsetted Projects</h2>
          <p className="projects-description">
            Projects I've finished and stopped working on
          </p>
          <div className="project-group">
            <Dbot tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} />
            <GlozzPersonalityTest tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} />
            <CornellZoomHub tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.PERSONAL]} />
            <SiteV1 tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.PERSONAL]} />
            <WebTest tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.SCHOOL]} />
            <KeyDB tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} />
            <Ghosted tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} />
            <Rubato tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} />
            {/* <Tetris3D tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} /> */}
          </div>
          <h2>Stashed Projects</h2>
          <p className="projects-description">Projects I'm taking a break on</p>
          <div className="project-group">
            <Apartment tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.PERSONAL]} />
            <Blog tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.PERSONAL]} />
          </div>
          {/* <h2>Honorable Mentions</h2>
          <p className="projects-description">
            Projects that are less notable but deserve recognition
          </p> */}
          <div className="project-group">
            {/* <UniversityInstagramData tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} /> */}
            {/* <RISCV tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.SCHOOL]} /> */}
            {/* <RayTracer tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} /> */}
            {/* <Rasterizer tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} /> */}
            {/* <AdmissionsTesting tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} /> */}
            {/* <Way tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} /> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
