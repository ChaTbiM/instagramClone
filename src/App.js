import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./scenes/Home";
import MainMenu from "./components/Navigations/MainMenu/MainMenu";
import Profile from "./scenes/Profile";
import { ModalProvider } from "./hooks/modalContext";
import DisclaimerModal from "./components/modals/DisclaimerModal/DisclaimerModal";
import { makeServer } from "./fakeServer/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  return (
    <Router>
      <ModalProvider>
        <MainMenu />
      </ModalProvider>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chatbim">
          <Profile />
        </Route>
      </Switch>
      <DisclaimerModal isOpen={isDisclaimerOpen}>
        <StyledCloseButton
          onClick={() => setIsDisclaimerOpen((oldVal) => !oldVal)}
        >
          X close
        </StyledCloseButton>
      </DisclaimerModal>
    </Router>
  );
}

const StyledCloseButton = styled.button`
  padding: 8px 15px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  :hover {
    background-color: #c9302c;
  }
  cursor: pointer;
`;

export default App;
