import React, { useEffect } from "react";
import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ResumePage from "./components/Resume";
import ContactPage from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import UnderDevelopment from "./components/UnderDevelopment";

const App = () => {
  useEffect(() => {
    const callback = document.createElement("script");
    callback.innerHTML =
      'function onSubmit(token) {return new Promise(function (resolve, reject) {document.getElementById("contact-form-submit").click();resolve();});}';
    document.body.appendChild(callback);

    const recaptcha = document.createElement("script");
    recaptcha.src = "https://www.google.com/recaptcha/api.js";
    document.body.appendChild(recaptcha);
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/projects" component={UnderDevelopment} />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
