import React from "react";
import ReactDOM from "react-dom";
import "./styles/scss/materialize.scss";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const firebase = require("firebase/app");

const config = {
  apiKey: "AIzaSyD3Fr5nZEDFcA2QZ3w99gCQQqzKPiEQMcw",
  authDomain: "site-benshen.firebaseapp.com",
  databaseURL: "https://site-benshen.firebaseio.com",
  projectId: "site-benshen",
  storageBucket: "site-benshen.appspot.com",
  messagingSenderId: "366693748482",
  appId: "1:366693748482:web:b3104fc26401942cb6bc1b",
  measurementId: "G-JEXR5Z2XWV",
};
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
