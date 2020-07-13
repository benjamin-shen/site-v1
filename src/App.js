import React, { Component } from "react";
import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./components/Home";
import ContactPage from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
