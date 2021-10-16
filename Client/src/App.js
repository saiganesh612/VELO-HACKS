import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// REDUX Components

// JS Components
import Home from './Pages/Home/home'
import Authentication from './Pages/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Authentication />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
