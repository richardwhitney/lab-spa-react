import React, {Component} from "react";
import {Route, Redirect} from 'react-router-dom';
//Redux
import {connect} from "react-redux";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Component {...props}/> : <Redirect to='/login'/>
    }
  />
);

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(PrivateRoute);