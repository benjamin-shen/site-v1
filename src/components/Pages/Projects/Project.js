import React from "react";
import { useHistory } from "react-router-dom";
import { ModalRoute } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";
import "styles/Project.css";
import "styles/ProjectModal.css";

const ProjectModal = ({ title, content }) => {
  const history = useHistory();
  const changeRoute = () => {
    history.push("/projects");
  };
  return (
    <div className="project-modal">
      <i className="material-icons right x-icon" onClick={changeRoute}>
        close
      </i>
      <h3>{title && title.toUpperCase()}</h3>
      {content || <p>More info coming soon!</p>}
    </div>
  );
};

const Project = ({ title, description, content, tags }) => {
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
  const path = "/projects/" + slug;
  const history = useHistory();
  const changeRoute = () => {
    history.push(path);
  };
  return (
    <div
      id={slug}
      className={"project z-depth-1 hoverable"}
      onClick={changeRoute}
    >
      <h3>{title && title.toUpperCase()}</h3>
      <p>{description}</p>
      <ModalRoute
        path={path}
        parentPath="/projects"
        component={() => (
          <ProjectModal title={title} content={content} tags={tags || []} />
        )}
      />
    </div>
  );
};

export default Project;
