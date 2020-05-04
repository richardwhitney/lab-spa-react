import React, {Component, Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import {Menu} from "semantic-ui-react";
// Redux
import {connect} from 'react-redux';
// Components
import AddContact from "../AddContact";

class ContactsMenuItems extends Component {


  render() {
    const { admin } = this.props;
    return (
      <Fragment>
        <Menu.Menu position='left'>
          <Link to='/home'>
            <Menu.Item name='home'>
              Home
            </Menu.Item>
          </Link>
        </Menu.Menu>
        {admin && (
          <Menu.Menu position="right">
            <AddContact/>
          </Menu.Menu>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  admin: state.user.credentials.admin
});

export default withRouter(connect(mapStateToProps)(ContactsMenuItems));