import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./About/About";
import Home from "./Home/Home";
import { Portfolio } from "./Portfolio/Portfolio";

const Projects = () => <div>Projects page</div>;
const NonExisting = () => (
  <div>
    4o4 <a href="/">back home</a>
  </div>
);

export const Pages = () => {
  return (
    <Switch>
      <Route path="/About" component={About} exact />
      <Route path="/Portfolio" component={Portfolio} exact />
      <Route path="/Projects" component={Projects} exact />
      <Route path="/" component={Home} exact />
      <Route component={NonExisting} exact />
    </Switch>
  );
};
