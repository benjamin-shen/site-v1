import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

// add active class

class Header extends Component {
  render() {
    return (
      <header id="header" className="valign-wrapper center-align">
        <div id="nav">
          <h1 className="left center-on-small-only">
            <NavLink exact to="/" activeClassName="is-active">
              <div className="hide-on-small-and-down show-on-med-and-up">
                Benjamin Shen
              </div>
              <div className="hide-on-med-and-up show-on-small">Ben Shen</div>
            </NavLink>
          </h1>
          <ul id="nav-mobile" className="right center-on-small-only">
            <li>
              <NavLink exact to="/about" activeClassName="is-active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/projects" activeClassName="is-active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="is-active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
