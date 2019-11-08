import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

//Reducers
import { smurfReducer } from "./reducers/index";

const store = createStore(smurfReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
