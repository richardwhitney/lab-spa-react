import React, {Component, Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import {Menu, MenuItem, Input} from "semantic-ui-react";
// Components
import AddTest from "../AddTest";
import TestSearchBar from "../TestSearchBar";

class TestHubMenuItems extends Component {


  render() {
    return (
      <Fragment>
        <Menu.Menu position='left'>
          <Link to='/home'>
            <Menu.Item name='home'>
              Home
            </Menu.Item>
          </Link>
        </Menu.Menu>
        <Menu.Menu position="right">

          <AddTest/>
        </Menu.Menu>
      </Fragment>
    )
  }
}

export default withRouter(TestHubMenuItems);