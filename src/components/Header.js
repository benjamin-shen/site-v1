import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

// add active class

class Header extends Component {
  render() {
    return (
      <header id="header" className="valign-wrapper center-align">
        <div id="nav" className="nav-wrapper">
          <h1 className="left center-on-small-only">
            <NavLink exact to="/home" activeClassName="is-active">
              <div className="hide-on-small-and-down show-on-med-and-up">
                Benjamin Shen
              </div>
              <div className="hide-on-med-and-up show-on-small">Ben Shen</div>
            </NavLink>
          </h1>
          <ul id="nav-mobile" className="right center-on-small-only">
            <li>
              <div className="space"></div>
              <NavLink exact to="/about" activeClassName="is-active">
                About
              </NavLink>
              <div className="space"></div>
            </li>
            <li>
              <div className="space"></div>
              <NavLink exact to="/projects" activeClassName="is-active">
                Projects
              </NavLink>
              <div className="space"></div>
            </li>
            <li>
              <div className="space hide-on-small-and-down"></div>
              <NavLink exact to="/contact" activeClassName="is-active">
                Contact
              </NavLink>
              <div className="space hide-on-small-and-down"></div>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
