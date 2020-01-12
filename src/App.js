import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import AppNavbar from "./components/pages/navbar/";
import landing from "./components/pages/landing/";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar />
          <Switch>
            <Route path="/" component={landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
