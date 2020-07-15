import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

// add active class

class Header extends Component {
  render() {
    return (
      <header id="header" className="valign-wrapper center-align">
        <div id="nav" className="nav-wrapper">
          <h1 className="left center-on-small-only">
            <Link to="/">
              Ben<span className="hide-on-small-and-down">jamin</span> Shen
            </Link>
          </h1>
          <ul id="nav-mobile" className="right center-on-small-only">
            <li>
              <Link to="/about">&nbsp;About&nbsp;</Link>
            </li>
            <li className="space hide-on-small-and-down"></li>
            <li>
              <Link to="/projects">&nbsp;Projects&nbsp;</Link>
            </li>
            <li className="space hide-on-small-and-down"></li>
            <li>
              <Link to="/contact">&nbsp;Contact&nbsp;</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
