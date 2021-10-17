import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reportWebVitals from './reportWebVitals';
import { reducers } from "./reducers"
import { Auth0Provider } from "@auth0/auth0-react"

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-mei12s29.us.auth0.com"
        clientId="9NDoMWF9Cpk0dZG4oQUmHdtUHdNLSLdO"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
