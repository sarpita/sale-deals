import './App.css';
import React, {useEffect} from 'react';
import Home from './home';
import Details from "./details";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/deal/:dealKey">
            <Details/>
          </Route>
          <Route>
            <div> page not found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
