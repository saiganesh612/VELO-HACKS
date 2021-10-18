import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/navbar/navbar';
// JS Components
import Home from './Pages/Home/home'
import ExperienceForm from './Pages/ExperienceForm/ExperienceForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbarr />
            <Home />
          </Route>
          <Route exact path="/post-your-experience">
            <Navbarr />
            <ExperienceForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
