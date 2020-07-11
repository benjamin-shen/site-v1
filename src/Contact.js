import React, { Component } from "react";
import { loadReCaptcha } from "react-recaptcha-google";
import Form from "./Form.js";
import "./Contact.css";

class Contact extends Component {
  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <div className="Contact">
        <h1 className="flow-text light-blue-text lighten-5">Contact Me</h1>
        <Form />
      </div>
    );
  }
}

export default Contact;
