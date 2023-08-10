// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "@/Pages/PageLayout/Homepage";
import AboutUs from "@/Pages/PageLayout/AboutUs";
import Service from "@/Pages/PageLayout/OurServicesLayout";
import Project from "@/Pages/PageLayout/OurProjectsLayout";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/services" component={Service} />
      <Route exact path="/projects" component={Project} />
    </Router>
  );
}

export default Routes;
