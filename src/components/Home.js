import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from "../images/logo410x410.png";

class Home extends Component {
  render() {
    return (
      <div className="container valign-wrapper">
        <div className="center-align">
          <h1>This website is under development.</h1>
          <img
            id="logo"
            className="hoverable responsive-img circle center"
            src={logo}
            alt="Ben Shen"
          />
          <Link to="/contact">
            <button className="btn waves-effect z-depth-2 transparent black-text">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
