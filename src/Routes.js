import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Launches from "./components/launches";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/launches">
          {" "}
          <Launches />{" "}
        </Route>
        <Route exact={true} path="/">
          {" "}
          <App />{" "}
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
