import React, {Component, Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import {Icon, Menu} from "semantic-ui-react";
// Redux
import {connect} from 'react-redux';
// Components
import AddTest from "../AddTest";

class TestHubMenuItems extends Component {


  render() {
    const { admin } = this.props;
    return (
      <Fragment>
        <Menu.Menu position='left'>
          <Link to='/home'>
            <Menu.Item name='home'>
              <Icon name='chevron left'/>
              Home
            </Menu.Item>
          </Link>
        </Menu.Menu>
        {admin && (
          <Menu.Menu position="right">
            <AddTest/>
          </Menu.Menu>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  admin: state.user.credentials.admin
});

export default withRouter(connect(mapStateToProps)(TestHubMenuItems));