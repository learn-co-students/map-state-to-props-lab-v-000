import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import manageUsers from "./reducers/manageUsers";
import { create } from "domain";
import { Provider } from "react-redux";

// add imports and code
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
