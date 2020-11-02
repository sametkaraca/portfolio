import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./About/About";
import Home from "./Home/Home";
import { Portfolio } from "./Portfolio/Portfolio";
import { Unreachable } from "./Unreachable";
import { Lab } from "./Lab/Lab";

// const Projects = () => <div>Projects page</div>;

export const Pages = () => {
  return (
    <Switch>
      <Route path="/About" component={About} exact />
      <Route path="/Portfolio" component={Portfolio} exact />
      <Route path="/Lab" component={Lab} exact />
      <Route path="/Home" component={Home} exact />
      <Route component={Unreachable} exact />
    </Switch>
  );
};
