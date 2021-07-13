import './App.css';
import React from 'react';
import Home from './home';
import Details from "./details";
import Modal from 'react-modal';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  Modal.setAppElement('#root');
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/deal/:cause/:dealKey">
            <Details/>
          </Route>
          <Route>
            <div> Page not found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
