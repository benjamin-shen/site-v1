import React from "react";
import { Redirect } from "react-router-dom";
import UnderDevelopment from "./UnderDevelopment";

const dev = true;

const LandingPage = () => {
  return dev ? <UnderDevelopment /> : <Redirect to="/home" />;
};

export default LandingPage;
