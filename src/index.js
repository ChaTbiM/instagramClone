import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

// global config for axios
axios.defaults.baseURL = "http://localhost:3000/"; //CHANGE LATER FOR PRODUCTION
axios.defaults.headers.get["Accept"] = "application/json"; // default header for all get request
axios.defaults.headers.post["Accept"] = "application/json"; // default header for all POST request

let token = "what??"; // Replace this later with getToken function ( get token from localStorage)

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // Assign token
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    console.log(config, "config");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      // Auth failure logic OR MAYBE HANDLE THAT LATER
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
