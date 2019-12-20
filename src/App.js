import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dash from "./pages/Dash";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dash">
          <Dash />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
