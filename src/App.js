import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import jwtDecode from 'jwt-decode';
// Redux
import {Provider} from 'react-redux';
import store from "./redux/store";
// Pages
import welcome from './pages/welcome';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
// Components
import Navbar from './components/Navbar';
import AuthRoute from './utils/AuthRoute';

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={welcome}/>
            <AuthRoute exact path="/login"
                       component={login}
                       authenticated={authenticated}
            />
            <AuthRoute exact path="/signup"
                       component={signup}
                       authenticated={authenticated}
            />
            <Route exact path="/home"
                   component={home}
                   authenticated={authenticated}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
