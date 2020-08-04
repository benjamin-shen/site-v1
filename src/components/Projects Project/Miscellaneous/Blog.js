import React from "react";
import Project from "../../Project";

const Blog = () => {
  return (
    <Project
      title="Blog"
      description="Personal Blog"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/blog"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://blog.benjaminshen.com"
          >
            Website
          </a>
          <p>Work in progress!</p>
        </div>
      }
    />
  );
};

export default Blog;
