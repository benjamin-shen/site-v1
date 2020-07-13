import React, { Component } from "react";
import { loadReCaptcha } from "react-recaptcha-google";
import Form from "./Form";
import "../styles/Contact.css";

class Contact extends Component {
  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <div id="contact">
        <h2 className="lighten-5">Contact Me</h2>
        <Form />
      </div>
    );
  }
}

export default Contact;
