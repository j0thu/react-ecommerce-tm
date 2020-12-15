import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //Redux provider
import store from "./store.js";
import "./bootstrap.min.css"; //Bootstwatch file
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/*Wrapping the react.strictMode with Provider - replaced*/}
    <App />
  </Provider>,
  document.getElementById("root")
);
