import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Collapsible, CollapsibleItem } from "react-materialize";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Project.css";
import "../styles/Projects.css";

const Project = ({
  title,
  description,
  context,
  accomplishments,
  reflection,
}) => {
  return (
    <div id={title.replace(/\s+/g, "-").toLowerCase()}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Collapsible accordion={false} popout>
        <CollapsibleItem
          expanded={false}
          header={
            <div>
              <span>Context</span>
              <i className="material-icons right">expand_more</i>
            </div>
          }
          node="div"
        >
          {context || "...coming soon!"}
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header={
            <div>
              <span>Accomplishments</span>
              <i className="material-icons right">expand_more</i>
            </div>
          }
          node="div"
        >
          {accomplishments || "...coming soon!"}
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header={
            <div>
              <span>Reflection</span>
              <i className="material-icons right">expand_more</i>
            </div>
          }
          node="div"
        >
          {reflection || "...coming soon!"}
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
};

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
        <Project title="title" description="description" />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
