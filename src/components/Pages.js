import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./About/About";
import { Home } from "./Home/Home";
import { Project } from "./Project/Project";
import { Error } from "./Error";
import { Lab } from "./Lab/Lab";

export const Pages = () => {
  return (
    <Switch>
      <Route path="portfolio/About" component={About} exact />
      <Route path="portfolio/Project" component={Project} exact />
      <Route path="portfolio/Lab" component={Lab} exact />
      <Route path="portfolio/Home" component={Home} exact />
      <Route path="portfolio/" component={Home} exact />
      <Route component={Error} exact />
    </Switch>
  );
};
