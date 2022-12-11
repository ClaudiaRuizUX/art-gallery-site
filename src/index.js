import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from "@auth0/auth0-react";
// import history from "./utils/history";
import { getConfig } from "./config";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";


const config = getConfig();
const root = ReactDOM.createRoot(document.getElementById('root'));

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin
};


root.render(
    <Auth0Provider
    domain="dev-ccwvmifqni62unrs.au.auth0.com"
    clientId="h3F82Hr5QRnQdGryaHmvzG5KHB9PofwF"
    redirectUri={window.location.origin}
  >

    <App />

  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
