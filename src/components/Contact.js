import React, { useEffect } from "react";
import "../styles/Form.css";
import "../styles/Contact.css";
import Header from "./Header";
import Footer from "./Footer";

const dev = false;

const siteKey = dev
  ? "6LcVWLAZAAAAABwKZGH_pswPDbb9foSrEnmOCelv"
  : "6Lf1HrAZAAAAAMz2s3423lVlKRuG3_QRKZIVf9rZ";

const emailText = "benjaminshen22@gmail.com";
const emailAddress = "benjaminshen22+website@gmail.com";
const phone = "(917) 719-0520";

const Form = () => {
  useEffect(() => {
    if (typeof window.grecaptcha !== "undefined" && window.grecaptcha) {
      window.grecaptcha.ready(function () {
        window.location.reload(false);
      });
    }
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
    window.scrollTo(0, 0);
  }, []);
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
};

export default Contact;
