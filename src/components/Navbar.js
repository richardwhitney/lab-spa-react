import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {Menu} from "semantic-ui-react";

// Redux
import {logoutUser} from "../redux/actions/userActions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Navbar extends Component {

  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  };

  render() {
    return (
      <Menu inverted>
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
          <Menu.Item name="Logout" onClick={this.handleLogout}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Navbar));