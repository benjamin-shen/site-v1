import React, { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  componentDidMount() {
    const callback = document.createElement("script");
    callback.innerHTML =
      'function onSubmit(token) {\
        return new Promise(function (resolve, reject) {\
          document.getElementById("contact-form-submit").click();\
          resolve();\
        });\
      }';
    this.div.appendChild(callback);
  }
  render() {
    return (
      <div className="form" ref={(el) => (this.div = el)}>
        <form
          action="https://formspree.io/xpzyoard"
          method="POST"
          id="contact-form"
        >
          <div class="input-field">
            <input id="email" type="email" class="validate" name="_replyto" />
            <label id="email-label" for="email">
              Your email address
            </label>
          </div>
          <label>
            <textarea name="message" placeholder="Your message" required />
          </label>
          <br />
          <button
            type="submit"
            className="waves-effect waves-light btn-large z-depth-2 light-blue g-recaptcha"
            data-sitekey="6Lf1HrAZAAAAAMz2s3423lVlKRuG3_QRKZIVf9rZ"
            data-callback="onSubmit"
          >
            Send
          </button>
          <br />
          <input id="contact-form-submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
