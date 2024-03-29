import React from "react";
import { Link } from "react-router-dom";
import "styles/PageNotFound.css";

const PageNotFound = (props) => {
  return (
    <div id="message">
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <p id="route">{window.location.href}</p>
      <p>
        The specified path was not found on this website. Please check the URL
        for mistakes and try again.
      </p>
      <div>
        <button
          className="btn waves-effect z-depth-2 transparent black-text"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Go Back
        </button>
        <Link to="/">
          <button className="btn waves-effect z-depth-2 right transparent black-text">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
