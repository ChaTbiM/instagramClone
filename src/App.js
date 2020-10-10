import React from "react";
import Home from "./scenes/Home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Navigation Component*/}
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </nav>
      {/* Pages */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
