import React, { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form
          action="https://formspree.io/xpzyoard"
          method="POST"
          id="contact-form"
        >
          <div className="input-field">
            <input
              id="email"
              type="email"
              className="validate"
              name="_replyto"
            />
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
            data-sitekey="6Lf1HrAZAAAAAMz2s3423lVlKRuG3_QRKZIVf9rZ"
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
  }
}

export default Form;
