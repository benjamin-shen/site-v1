import React, { Component } from "react";
import "../styles/Home.css";
import Nav from "./Nav";
import logo from "../images/logo410x410.png";

const style = { border: "1px solid red" };
const Image = () => {
  return <img id="logo" className="circle" src={logo} alt="Ben Shen" />;
};

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Nav />
      </div>
    );
  }
}

export default Home;
