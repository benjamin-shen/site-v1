import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

// add active class

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="center-align">
        <div className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l4 m12 s12">
                <ul>
                  <li>
                    <a
                      href="https://github.com/benjamin-shen"
                      target="_blank"
                      className="white-text"
                    >
                      <h6>Github: benjamin-shen</h6>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/benjaminfshen/"
                      target="_blank"
                      className="white-text"
                    >
                      <h6>LinkedIn: benjaminfshen</h6>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l4 m12 s12">
                <h5>Thank you for visiting!</h5>
              </div>
              <div className="col l4 m12 s12">
                <a target="_blank" href="https://www.buymeacoffee.com/benshen">
                  <button class="btn z-depth-2">
                    <div id="bmc" className="valign-wrapper">
                      <img
                        id="bmc-img"
                        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                        alt="Buy me bubble tea"
                      />
                      <span id="bmc-text">Buy me bubble tea</span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">© 2020 Benjamin Shen</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
