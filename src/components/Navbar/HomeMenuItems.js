import React, {Component} from "react";
import {Menu} from "semantic-ui-react";
import {withRouter} from "react-router-dom";

// Redux
import {logoutUser} from "../../redux/actions/userActions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class HomeMenuItems extends Component {

  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  };

  render() {
    return (
      <Menu.Menu position="right">
        <Menu.Item name="Logout" onClick={this.handleLogout}>
          Logout
        </Menu.Item>
      </Menu.Menu>
    )
  }
}

HomeMenuItems.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps, {logoutUser})(withRouter(HomeMenuItems));