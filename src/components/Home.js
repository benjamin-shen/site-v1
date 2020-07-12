import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from "../images/logo500x500.png";

const MainPage = () => {
  return (
    <div className="container valign-wrapper">
      <div className="center-align">
        <h1>This website is under development.</h1>
        <img
          id="logo"
          className="hoverable responsive-img circle center"
          src={logo}
        />
        <Link to="/Contact">
          <h2>Contact Me</h2>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
