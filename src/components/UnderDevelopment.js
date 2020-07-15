import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/UnderDevelopment.css";
import logo from "../images/logo410x410.png";

class UnderDevelopment extends Component {
  render() {
    return (
      <div id="underDevelopment" className="valign-wrapper">
        <div id="notice" className="center-align">
          <h1>This site is under development.</h1>
          <img
            id="logo"
            className="hoverable responsive-img circle center"
            src={logo}
            alt="Ben Shen"
          />
          <br />
          <button
            className="btn waves-effect z-depth-2 transparent black-text"
            onClick={() => this.props.history.goBack()}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default UnderDevelopment;
