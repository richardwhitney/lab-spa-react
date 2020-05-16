import React, {Component, Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import {Menu} from "semantic-ui-react";
// Redux
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import AuthNavbar from "./AuthNavbar";

class Navbar extends Component {

  render() {
    const { authenticated} = this.props;
    return (
      <Menu fixed='top' inverted>
        {authenticated ? (
          <AuthNavbar/>
        ) : (
          <Fragment>
            <Menu.Menu position="left">
              <Link to="/">
                <Menu.Item name="welcome">
                  Lab
                </Menu.Item>
              </Link>
            </Menu.Menu>

            <Menu.Menu position="right">
              <Link to="/login">
                <Menu.Item name="login">
                  Login
                </Menu.Item>
              </Link>
              <Link to="/signup">
                <Menu.Item name="signup">
                  Signup
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Fragment>
        )}
      </Menu>
    )
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default withRouter(connect(mapStateToProps)(Navbar));