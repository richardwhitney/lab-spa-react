import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
// Redux
import {Provider} from 'react-redux';
import store from "./redux/store";
import {SET_AUTHENTICATED} from "./redux/types";
import {logoutUser, getUserData} from "./redux/actions/userActions";
// Pages
import welcome from './pages/welcome';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import testHub from "./pages/testHub";
import biochemistry from './pages/biochemistry';
import bloodProductInformation from './pages/bloodProductInformation';
import bloodProductDetail from "./pages/bloodProductDetail";
import bloodTransfusion from './pages/bloodTransfusion';
import clinicalPathwaysHub from './pages/clinicalPathwaysHub';
import clinicalPathwayDetail from "./pages/clinicalPathwayDetail";
import contacts from './pages/contacts';
import generalInformation from './pages/generalInformation';
import haematology from './pages/haematology';
import quizHub from "./pages/quizHub";
import newsHub from "./pages/newsHub";
import testDetail from "./pages/testDetail";
import quizDetail from "./pages/quizDetail";
import quizResults from "./pages/quizResults";
import editMarkdown from "./pages/editMarkdown";
// Components
import Navbar from './components/Navbar/Navbar';
import AuthRoute from './utils/AuthRoute';
import PrivateRoute from "./utils/PrivateRoute";

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
    store.dispatch(getUserData());
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
            <PrivateRoute exact path="/home"
                   component={home}
            />
            <PrivateRoute path="/testhub"
                   component={testHub}
            />
            <PrivateRoute path="/biochemistry"
                   component={biochemistry}
            />
            <PrivateRoute path="/bloodProductInformation"
                   component={bloodProductInformation}
            />
            <PrivateRoute path="/bloodProducts/:productId"
                          component={bloodProductDetail}
            />
            <PrivateRoute path="/bloodTransfusion"
                   component={bloodTransfusion}
            />
            <PrivateRoute path="/clinicalPathwaysHub"
                   component={clinicalPathwaysHub}
            />
            <PrivateRoute path="/clinicalPathways/:clinicalPathwayId"
                          component={clinicalPathwayDetail}
            />
            <PrivateRoute path="/contacts"
                   component={contacts}
            />
            <PrivateRoute path="/generalInformation"
                   component={generalInformation}
            />
            <PrivateRoute path="/haematology"
                   component={haematology}
            />
            <PrivateRoute path="/quizhub"
                   component={quizHub}
            />
            <PrivateRoute path="/news"
                   component={newsHub}
            />
            <PrivateRoute path="/tests/:testId"
                   component={testDetail}
            />
            <PrivateRoute path="/quizzes/:quizId"
                   component={quizDetail}
            />
            <PrivateRoute path="/quizresults"
                          component={quizResults}
            />
            <PrivateRoute path="/editMarkdown"
                          component={editMarkdown}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
