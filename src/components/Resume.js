import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Resume.css";
import resume from "../assets/Benjamin Shen.pdf";

const Resume = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div id="resume">
      <Header />
      <main className="center container">
        <h2>
          <a rel="noopener noreferrer" target="_blank" href={resume}>
            Benjamin Shen.pdf
          </a>
        </h2>
        <div id="resume-container">
          <iframe
            id="resume-iframe"
            src={resume}
            title="Benjamin Shen.pdf"
            className="hide-on-small-and-down"
          ></iframe>
          <p className="hide-on-med-and-up">
            Could not display resume in browser. <br />
            Please click on the pdf link above.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
