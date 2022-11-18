import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "./reducers/projectsReducer.js";
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from "@auth0/auth0-react";
// import history from "./utils/history";
import { getConfig } from "./config";




const config = getConfig();
const store = createStore(projectsReducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));

// const onRedirectCallback = (appState) => {
//   history.push(
//     appState && appState.returnTo ? appState.returnTo : window.location.pathname
//   );
// };

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin
  // onRedirectCallback,
};


root.render(
    <Auth0Provider
    domain="dev-ccwvmifqni62unrs.au.auth0.com"
    clientId="h3F82Hr5QRnQdGryaHmvzG5KHB9PofwF"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
    <App />
    </Provider>,
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
