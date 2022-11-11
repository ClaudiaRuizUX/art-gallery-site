import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import './styles/index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "./reducers/projectsReducer.js";

const store = createStore(projectsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);