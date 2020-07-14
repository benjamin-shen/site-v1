import React, { Component } from "react";
import { loadReCaptcha } from "react-recaptcha-google";
import Nav from "./Nav";
import Form from "./Form";
import "../styles/Contact.css";

const email = "bfs45@cornell.edu";
const phone = "(917) 719-0520";

class Contact extends Component {
  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <div id="contact">
        <Nav />
        <div class="valign-wrapper">
          <div id="form" className="z-depth-1">
            <h1>Contact Me</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
