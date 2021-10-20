import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/navbar/navbar';
import routes from "./routes/routes"

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} exact path={route.path}>
                {route.component}
              </Route>
            )
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
