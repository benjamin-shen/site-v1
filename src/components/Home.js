import React, { useEffect } from "react";
import "../styles/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../images/logo410x410.png";

const style = { border: "1px solid red" };
const Image = () => {
  return <img id="logo" className="circle" src={logo} alt="Ben Shen" />;
};

const Home = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="home">
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default Home;
