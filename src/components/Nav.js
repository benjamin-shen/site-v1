import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

// add active class

class Nav extends Component {
  render() {
    return (
      <div id="header" className="valign-wrapper center-align">
        <div id="nav" className="nav-wrapper">
          <h1 className="left">
            <Link to="/">Benjamin Shen</Link>
          </h1>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
