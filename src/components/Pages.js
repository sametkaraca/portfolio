import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./About/About";
import { Home } from "./Home/Home";
import { Portfolio } from "./Portfolio/Portfolio";
import { Error } from "./Error";
import { Lab } from "./Lab/Lab";

export const Pages = () => {
  return (
    <Switch>
      <Route path="/About" component={About} exact />
      <Route path="/Portfolio" component={Portfolio} exact />
      <Route path="/Lab" component={Lab} exact />
      <Route path="/Home" component={Home} exact />
      <Route path="/" component={Home} exact />
      <Route component={Error} exact />
    </Switch>
  );
};
