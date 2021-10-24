import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mei12s29.us.auth0.com"
      clientId="9NDoMWF9Cpk0dZG4oQUmHdtUHdNLSLdO"
      redirectUri={`${window.location.origin}/team-feed`}
      audience="https://dev-mei12s29.us.auth0.com/api/v2/"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
