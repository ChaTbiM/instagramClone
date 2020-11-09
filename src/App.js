import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/Home";
import MainMenu from "./components/Navigations/MainMenu/MainMenu";
import { ModalProvider } from "./hooks/modalContext";
import Profile from "./scenes/Profile";
import DisclaimerModal from "./components/modals/DisclaimerModal/DisclaimerModal";
import styled from "styled-components";
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

function App() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(true);
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

export default App;
