import React from "react";
import "../styles/Footer.css";
import bbt from "../assets/icons/bbt160.png";
import github from "../assets/icons/github32.png";
import linkedin from "../assets/icons/linkedin32.png";

const BuyMeCoffee = () => {
  return (
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
  );
};

const Social = ({ name, link, image, label }) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={link}
      className="white-text"
    >
      <img src={image} alt={name + " Icon"} />
      <span className="social-media">{label}</span>
    </a>
  );
};

const messages = [
  "Stay healthy!",
  "Have a good day!",
  "Thank you for visiting!",
  // <span>
  //   Check out my{" "}
  //   <a
  //     rel="noopener noreferrer"
  //     target="_blank"
  //     href="https://blog.benjaminshen.com"
  //     className="blue-text text-darken-2"
  //   >
  //     blog
  //   </a>
  //   !
  // </span>,
  // <span>
  //   Check out my{" "}
  //   <a
  //     rel="noopener noreferrer"
  //     target="_blank"
  //     href="https://sites.benjaminshen.com"
  //     className="blue-text text-darken-2"
  //   >
  //     other sites
  //   </a>
  //   !
  // </span>,
];
const FooterMessage = () => {
  return <h5>{messages[Math.floor(Math.random() * messages.length)]}</h5>;
};

const Footer = () => {
  return (
    <footer id="footer">
      <div className="page-footer">
        <div className="container primary-color-lighten">
          <div className="row valign-wrapper">
            <div className="col l4 m12 s12 center-on-med-and-down">
              <div className="left-section">
                <h5 className="white-text">Support Me</h5>
                <BuyMeCoffee />
              </div>
            </div>
            <div className="col l4 m12 s12 center">
              <div className="hide-on-med-and-down">
                <FooterMessage />
                <i className="material-icons">favorite_outline</i>
              </div>
            </div>
            <div className="col l4 m12 s12 center-on-med-and-down">
              <div className="right-section">
                <h5 className="white-text">Visit My Socials</h5>
                <ul>
                  <li>
                    <Social
                      name="Github"
                      link="https://github.com/benjamin-shen"
                      image={github}
                      label="benjamin-shen"
                    />
                  </li>
                  <li>
                    <Social
                      name="LinkedIn"
                      link="https://www.linkedin.com/in/benjaminfshen/"
                      image={linkedin}
                      label="benjaminfshen"
                    />
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
