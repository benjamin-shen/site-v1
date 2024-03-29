import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import loadjs from "loadjs";
import Header from "../Header";
import Footer from "../Footer";
import "styles/Form.css";
import "styles/Contact.css";

const dev = false;

const siteKey = dev
  ? "6LcVWLAZAAAAABwKZGH_pswPDbb9foSrEnmOCelv"
  : "6Lf1HrAZAAAAAMz2s3423lVlKRuG3_QRKZIVf9rZ";

const emailText = "benjaminshen22@gmail.com";
const emailAddress = "benjaminshen22+website@gmail.com";

const Form = () => {
  useEffect(() => {
    // reloads script every time client navigates elsewhere and comes back
    loadjs("https://www.google.com/recaptcha/api.js");
  }, []);
  return (
    <div className="form">
      <form
        action="https://formspree.io/xpzyoard"
        method="POST"
        id="contact-form"
      >
        <div className="input-field">
          <input id="email" type="email" className="validate" name="_replyto" />
          <label id="email-label" htmlFor="email">
            Your email address
          </label>
        </div>
        <label>
          <textarea name="message" placeholder="Your message" required />
        </label>
        <br />
        <button
          type="submit"
          className="waves-effect btn-large z-depth-2 transparent black-text g-recaptcha"
          data-sitekey={siteKey}
          data-callback="onSubmit"
          data-action="submit"
        >
          Send
        </button>
        <br />
        <input type="text" className="hide" name="_gotcha" />
        <input id="contact-form-submit" type="submit" className="hide" />
      </form>
    </div>
  );
};

const Contact = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="contact">
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact Benjamin Shen." />
        <meta property="og:title" content="Benjamin Shen - Contact" />
        <meta property="og:description" content="Contact Benjamin Shen." />
      </Helmet>
      <Header />
      <main className="valign-wrapper">
        <div id="form" className="z-depth-1">
          <h2>Contact Me</h2>
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"mailto:" + emailAddress + "?subject=Website%20Contact"}
            >
              {emailText}
            </a>
          </p>
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
