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
        <h1 className="flow-text light-blue-text lighten-5">Contact Me</h1>
        <Form />
      </div>
    );
  }
}

export default Contact;
