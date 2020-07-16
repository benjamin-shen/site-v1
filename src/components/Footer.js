import React from "react";
import "../styles/Footer.css";
import bbt from "../images/bbt160.png";
import github from "../images/github32.png";
import linkedin from "../images/linkedin32.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="page-footer">
        <div className="container primary-color-lighten">
          <div className="row valign-wrapper">
            <div className="col l4 m12 s12 center-on-med-and-down">
              <div className="left-section">
                <h5 className="white-text">Support Me</h5>
                <a
                  id="bmc"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.buymeacoffee.com/benshen"
                >
                  <button className="btn z-depth-2">
                    <div className="valign-wrapper">
                      <img id="bmc-img" src={bbt} alt="Buy me bubble tea!" />
                      <span id="bmc-text">Buy me bubble tea</span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className="col l4 m12 s12 center">
              <div className="hide-on-med-and-down">
                <h5>Stay Healthy!</h5>
                <i className="material-icons">favorite_outline</i>
              </div>
            </div>
            <div className="col l4 m12 s12 center-on-med-and-down">
              <div className="right-section">
                <h5 className="white-text">Visit My Socials</h5>
                <ul>
                  <li>
                    <a
                      href="https://github.com/benjamin-shen"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="white-text"
                    >
                      <img src={github} alt="Github" />
                      <span className="social-media">benjamin-shen</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/benjaminfshen/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="white-text"
                    >
                      <img src={linkedin} alt="LinkedIn" />
                      <span className="social-media">benjaminshen</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright center-align">
          <div className="container">© 2020 Benjamin Shen</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
