import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route>
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
