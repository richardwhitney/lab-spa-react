import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import welcome from './pages/welcome';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={welcome}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
            <Route exact path="/home" component={home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
