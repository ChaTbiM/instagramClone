import React from "react";
import Home from "./scenes/Home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainMenu from "./components/Navigations/MainMenu/MainMenu";

function App() {
  return (
    <Router>
      {/* Navigation Component*/}
      <MainMenu />
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
