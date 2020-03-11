import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
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
// Redux
import {SET_AUTHENTICATED} from "./redux/types";
import {logoutUser} from "./redux/actions/userActions";
import TestDetail from "./pages/testDetail";

axios.defaults.baseURL = 'https://europe-west1-lab-fyp-rw.cloudfunctions.net/api';

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
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

            />
            <AuthRoute exact path="/signup"
                       component={signup}
            />
            <Route exact path="/home"
                   component={home}
            />
            <Route path="/tests/:testId"
                   component={TestDetail}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
