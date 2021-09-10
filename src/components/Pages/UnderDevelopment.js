import React from "react";
import "styles/UnderDevelopment.css";
import logo from "assets/promo/logo410x410.png";

const UnderDevelopment = (props) => {
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
          onClick={() => {
            props.history.goBack();
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
