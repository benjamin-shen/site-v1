import React from "react";
import Project from "../../Project";

const XiCompiler = ({ tags }) => {
  return (
    <Project
      title="Xi Compiler"
      description="Optimizing compiler targeting x86 for the Xi language"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/xicompiler/compiler"
          >
            Github
          </a>
          <p>
            Xi is the toy language used for the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://courses.cs.cornell.edu/cs4120/2022sp/"
            >
              Compilers class
            </a>{" "}
            at Cornell. The semester-long project involved lexing/parsing, type
            checking, intermediate representation (IR) generation, assembly code
            generation, code optimizations, and language extensions. Our
            compiler was written OCaml.
          </p>
        </div>
      }
      tags={tags || []}
    />
  );
};

export default XiCompiler;
