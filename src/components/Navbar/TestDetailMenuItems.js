import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {Icon, Menu} from "semantic-ui-react";

// Redux
import {connect} from "react-redux";

import EditTest from "../EditTest";
import DeleteTest from "../DeleteTest";

class TestHubMenuItems extends Component {

  render() {
    const { admin, test: { testId } } = this.props;
    return (
      <Fragment>
        <Menu.Menu position='left'>
          <Link to='/testhub'>
            <Menu.Item name='testhub'>
              <Icon name='chevron left'/>
              Test Hub
            </Menu.Item>
          </Link>
        </Menu.Menu>
        {admin && (
          <Menu.Menu position="right">
            <EditTest/>
            <DeleteTest testId={testId}/>
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