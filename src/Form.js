import React, { Component } from "react";

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
      <div className="Form" ref={(el) => (this.div = el)}>
        <form
          action="https://formspree.io/xpzyoard"
          method="POST"
          id="contact-form"
        >
          <label>
            Email:
            <br />
            <input type="text" name="_replyto" placeholder="your@email.here" />
          </label>
          <br />
          <label>
            Message:
            <br />
            <textarea name="message" required />
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
