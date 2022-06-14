import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ModalContainer } from "react-router-modal";
import Header from "../Header";
import Footer from "../Footer";
import "styles/Projects.css";

import { TAGS } from "../../constants";

// DTI
import CoursePlan from "./Cards/DTI/CoursePlan";
import Flux from "./Cards/DTI/Flux";
import FluxFitness from "./Cards/DTI/FluxFitness";
// Games
import Ghosted from "./Cards/Games/Ghosted";
import Rubato from "./Cards/Games/Rubato";
// Glozz
import Dbot from "./Cards/Glozz/Dbot";
import GlozzPersonalityTest from "./Cards/Glozz/GlozzPersonalityTest";
// Hackathon
import CornellZoomHub from "./Cards/Hackathon/CornellZoomHub";
// Miscellaneous
import Blog from "./Cards/Miscellaneous/Blog";
import SiteV1 from "./Cards/Miscellaneous/SiteV1";
import SiteV2 from "./Cards/Miscellaneous/SiteV2";
// Personal
import Apartment from "./Cards/Personal/Apartment";
// School
import KeyDB from "./Cards/School/KeyDB";
import WebTest from "./Cards/School/WebTest";
import XiCompiler from "./Cards/School/XiCompiler";
// Way
import Way from "./Cards/Way/Way";

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
          <h2>Other Projects</h2>
          <p className="projects-description">
            Projects I've finished and stopped working on, or projects I'm
            taking a break on
          </p>
          <div className="project-group">
            <Flux tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.ORG]} />
            <FluxFitness tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.ORG]} />
            <Dbot tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} />
            <GlozzPersonalityTest tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} />
            <CornellZoomHub tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.PERSONAL]} />
            <SiteV1 tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.PERSONAL]} />
            <Ghosted tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} />
            <Rubato tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} />
            {/* <Tetris3D tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} /> */}
            <XiCompiler tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} />
            <Apartment tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.PERSONAL]} />
            <Blog tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.PERSONAL]} />
            <WebTest tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.SCHOOL]} />
            <KeyDB tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} />
            {/* <UniversityInstagramData tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} /> */}
            {/* <RISCV tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.SCHOOL]} /> */}
            {/* <RayTracer tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} /> */}
            {/* <Rasterizer tags={[TAGS.COLLAB.TEAM, TAGS.PURPOSE.SCHOOL]} /> */}
            {/* <AdmissionsTesting tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} /> */}
            <Way tags={[TAGS.COLLAB.SOLO, TAGS.PURPOSE.ORG]} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
