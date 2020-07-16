import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ResumePage from "./components/Resume";
import ContactPage from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import UnderDevelopment from "./components/UnderDevelopment";

import "./styles/App.css";

import headshot from "./assets/images/bfs45-transparent.png";

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
    <div id="app">
      <Helmet>
        <title>Benjamin Shen</title>
        <meta name="author" content="Benjamin Shen" />
        <meta
          name="description"
          content="College Student, Developer, Singer, Learner."
        />
        <meta
          name="keywords"
          content="ben, benjamin, shen, ben shen, benjamin shen, website, freelance, developer, software, tech, technology, engineer, stem, computer science"
        />
        <meta property="og:title" content="Benjamin Shen - Personal Website" />
        <meta
          property="og:description"
          content="College Student, Developer, Singer, Learner."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://benjaminshen.com" />
        <meta property="og:img" content={headshot} />
      </Helmet>
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
    </div>
  );
};

export default App;
