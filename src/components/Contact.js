import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import "../styles/Contact.css";

const emailText = "benjaminshen22@gmail.com";
const emailAddress = "benjaminshen22+website@gmail.com";
const phone = "(917) 719-0520";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Header />
        <main className="valign-wrapper">
          <div id="form" className="z-depth-1">
            <h1>Contact Me</h1>
            <p>
              <a href={"mailto:" + emailAddress + "?subject=Website%20Contact"}>
                {emailText}
              </a>
            </p>
            <p>{phone}</p>
            <Form />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Contact;
