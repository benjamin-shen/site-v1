import React, { useEffect } from "react";
import "../styles/About.css";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="about">
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default About;
