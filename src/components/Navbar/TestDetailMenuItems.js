import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

// Redux
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { deleteTest } from "../../redux/actions/dataActions";

import EditTest from "../EditTest";

class TestHubMenuItems extends Component {

  componentDidMount() {
    console.log("State test id " + this.props.test.testId);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.test !== this.props.test) {
      console.log('Test state changed ' + this.props.test.testId);
    }
  }

  handleDelete = (event) => {
    event.preventDefault();
    console.log("Menu item handle delete");
    this.props.deleteTest(this.props.test.testId, this.props.history);
  };

  render() {
    const { admin } = this.props;
    return (
      <Fragment>
        <Menu.Menu position='left'>
          <Link to='/testhub'>
            <Menu.Item name='testhub'>
              Test Hub
            </Menu.Item>
          </Link>
        </Menu.Menu>
        {admin && (
          <Menu.Menu position="right">
            <EditTest/>
            <MenuItem onClick={this.handleDelete}>
              Delete
            </MenuItem>
          </Menu.Menu>
        )}
      </Fragment>
    )
  }
}

TestHubMenuItems.propTypes = {
  deleteTest: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  test: state.data.test,
  admin: state.user.credentials.admin
});

const mapActionsToProps = {
  deleteTest
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(TestHubMenuItems));