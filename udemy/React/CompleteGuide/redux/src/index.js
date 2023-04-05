import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";
import sliceStore from "./store/sliceIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <Provider store={sliceStore}>
    <App />
  </Provider>
);
