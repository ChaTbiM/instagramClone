import React, { useEffect, useState } from "react";
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
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import AppLoader from "./scenes/AppLoader";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
  console.log("base_url", process.env.REACT_APP_BASE_URL);
}

function App() {
  const [loadingApp, setLoadingApp] = useState(true);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const queryCache = new QueryCache();

  const callback = (cache, query) => {
    const pages = ['"home"', '"test"'];

    if (query && cache.isFetching === 0) {
      // if (query.queryHash.includes('"home"') && cache.isFetching === 0) {
      //   return setLoadingApp(false);
      // }
      pages.forEach((page) => {
        if (query.queryHash.includes(page) && cache.isFetching === 0) {
          return setLoadingApp(false);
        }
      });
    }
  };

  const unsubscribe = queryCache.subscribe(callback);

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, [unsubscribe]);

  useEffect(() => {
    if (queryCache.queriesArray.length === 0) {
      setLoadingApp(false);
    }
  }, [queryCache]);

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <ModalProvider>
          <MainMenu />
        </ModalProvider>
        {loadingApp && <AppLoader isShown={loadingApp} />}
        <Switch>
          <Route exact path="/">
            <Home setLoadingApp={setLoadingApp} />
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
