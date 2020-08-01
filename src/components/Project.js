import React from "react";
import { useHistory } from "react-router-dom";
import { ModalRoute } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";
import "../styles/Project.css";
import "../styles/ProjectModal.css";

const ProjectModal = ({ content }) => {
  return <div className="project-modal">More info coming soon!{content}</div>;
};

const Project = ({ title, description, content }) => {
  const history = useHistory();
  const slug =
    title &&
    title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "") // eslint-disable-line
      .replace(/\-\-+/g, "-") // eslint-disable-line
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  const changeRoute = () => {
    history.push("/projects/" + slug);
  };
  return (
    <div
      id={slug}
      className="project z-depth-1 hoverable"
      onClick={changeRoute}
    >
      <h3>{title && title.toUpperCase()}</h3>
      <p>{description}</p>
      <ModalRoute
        path={`/projects/${slug}`}
        parentPath="/projects"
        component={() => <ProjectModal content={content} />}
      />
    </div>
  );
};

export default Project;
