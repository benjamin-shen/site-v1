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
          <p>
            This blog site is built with GatsbyJS and Contentful (a headless
            CMS). Blog post data is pulled from Contentful using GraphQL. Pages
            are generated dynamically from post slugs. The website is hosted on
            Netlify.
          </p>
        </div>
      }
      wip={true}
    />
  );
};

export default Blog;
