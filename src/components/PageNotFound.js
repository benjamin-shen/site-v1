import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/PageNotFound.css";

function Pathname() {
  const location = useLocation();
  return <p>benjaminshen.com{location.pathname}</p>;
}

class PageNotFound extends Component {
  render() {
    return (
      <div id="message">
        <h2>404</h2>
        <h1>Page Not Found</h1>
        <p id="route">
          <Pathname />
        </p>
        <p>
          The specified path was not found on this website. Please check the URL
          for mistakes and try again.
        </p>
        <div>
          <button
            className="waves-effect waves-light btn z-depth-2"
            onClick={() => this.props.history.goBack()}
          >
            Go Back
          </button>
          <Link to="/">
            <button className="btn waves-effect waves-light z-depth-2 right">
              Home
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
