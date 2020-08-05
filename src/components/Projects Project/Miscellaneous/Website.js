import React from "react";
import { Link } from "react-router-dom";
import Project from "../../Project";

const Website = () => {
  return (
    <Project
      title="Site-v1"
      description="Personal Website"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/site-v1"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://site-v1.benjaminshen.com"
          >
            Website
          </a>
          <p>
            You are currently viewing this project! This website is built with
            ReactJS as a front-end framework. It uses some styling and
            components from Materialize CSS. I initially used Firebase Hosting
            for web hosting, but I changed to Netlify for its continuous
            deployment from Github. I am currently using the custom domain{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://benjaminshen.com"
            >
              benjaminshen.com
            </a>{" "}
            with Cloudflare as a DNS hosting provider.
          </p>
          <p>
            I taught myself React, and developed this website over the course of
            three weeks. I am now actively maintaining it, with potential plans
            to migrate to NextJS or add pre-rendering for better SEO. Please{" "}
            <Link to="/contact">contact me</Link> if you find any typos/bugs or
            want to suggest improvements!
          </p>
        </div>
      }
    />
  );
};

export default Website;
