import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/navbar/navbar';
// REDUX Components

// JS Components
import Home from './Pages/Home/Home'
import ExperienceForm from './Pages/ExperienceForm/ExperienceForm';
// import Authentication from './Pages/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbarr/>
            <Home />
          </Route>
          <Route exact path="/post-your-experience">
            <Navbarr/>
            <ExperienceForm />
          </Route>
          {/* <Route exact path="/auth">
            <Authentication />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
