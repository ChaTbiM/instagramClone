import React , {useState} from "react";
import Home from "./scenes/Home";
import "./reset.css";
import "./App.css";
import DisclaimerModal from './components/DisclaimerModal/DisclaimerModal';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainMenu from "./components/Navigations/MainMenu/MainMenu";
import styled from "styled-components";




function App() {

  const [isModalOpen, setModalOpen] = useState(true);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const StyledCloseButton = styled.button`
      padding:8px 15px;
      background-color:#d9534f;
      color:white;
      border:none;
      border-radius:5px;
      outline:none;

      :hover{
      background-color:#c9302c;
      }

      cursor:pointer;

`

  return (
    <Router>
      {/* Navigation Component*/}
      <MainMenu />
      {/* Pages */}
      <Switch >
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <DisclaimerModal isOpen={isModalOpen}>
      <StyledCloseButton  onClick={toggleModal}>X close</StyledCloseButton>

      </DisclaimerModal>
    </Router>
  );
}

export default App;

