import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

// Redux
import {connect} from "react-redux";

import EditTest from "../EditTest";
import DeleteTest from "../DeleteTest";

class TestHubMenuItems extends Component {

  componentDidMount() {
    console.log("State test id " + this.props.test.testId);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.test !== this.props.test) {
      console.log('Test state changed ' + this.props.test.testId);
    }
  }

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
            <DeleteTest testId={this.props.test.testId}/>
          </Menu.Menu>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  test: state.data.test,
  admin: state.user.credentials.admin
});


export default withRouter(connect(mapStateToProps)(TestHubMenuItems));