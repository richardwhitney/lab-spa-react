import React from "react";
import {Route, Redirect} from 'react-router-dom';
//Redux
import {connect} from "react-redux";

const AuthRoute = ({component: Component, authenticated, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Redirect to='/home'/> : <Component {...props}/>
    }
  />
);

/*AuthRoute.propTypes = {
  user: PropTypes.object.isRequired
};*/

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(AuthRoute);