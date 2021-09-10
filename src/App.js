import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

// import { LandingPage, UnderDevelopment } from "./components/Pages";
import {
  HomePage,
  AboutPage,
  ResumePage,
  ProjectsPage,
  ContactPage,
  PageNotFound,
} from "./components/Pages";

import "./styles/App.css";

import headshot from "assets/images/bfs45-transparent.png";

const App = () => {
  useEffect(() => {
    const callback = document.createElement("script");
    callback.innerHTML = `function onSubmit(token) {return new Promise(function (resolve, reject) {document.getElementById("contact-form-submit").click();resolve();});}`;
    document.body.appendChild(callback);

    const collapsible = document.createElement("script");
    collapsible.innerHTML = `document.addEventListener('DOMContentLoaded', function() {var elems = document.querySelectorAll('.collapsible');var instances = M.Collapsible.init(elems, {accordion: false});});`;
    document.body.appendChild(collapsible);
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://benjaminshen.com" />
        <meta property="og:img" content={headshot} />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/projects/:slug" component={ProjectsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={PageNotFound} /> {/* TODO Add 404 status */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
