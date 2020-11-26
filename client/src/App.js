import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import MainMenu from "./components/Navigations/MainMenu/MainMenu";
import { ModalProvider } from "./hooks/modalContext";
import DisclaimerModal from "./components/modals/DisclaimerModal/DisclaimerModal";
// import { makeServer } from "./fakeServer/server";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import AppLoader from "./scenes/AppLoader";
import useAppLoading from "./hooks/useAppLoading";

import { Home, Profile, Inbox, People } from "./scenes";
import StoriesFullView from "./scenes/StoriesFullView";

const queryCache = new QueryCache();

function App() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [loadingApp] = useAppLoading(queryCache);

  const [showMainMenu, toggleMainMenu] = useState(true);

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        {loadingApp && <AppLoader />}
        <ModalProvider>
          {showMainMenu && (
            <>
              <MainMenu />
              <div style={{ paddingTop: "6rem" }}></div>
            </>
          )}
        </ModalProvider>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/inbox">
            <Inbox />
          </Route>
          <Route exact path="/explore">
            <People />
          </Route>
          <Route exact path="/stories/:userName/:storyId">
            <StoriesFullView toggleMainMenu={toggleMainMenu} />
          </Route>
          <Route exact path="/:username">
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
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryCacheProvider>
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
