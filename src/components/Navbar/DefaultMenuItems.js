import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {Menu} from "semantic-ui-react";

class DefaultMenuItems extends Component {

  render() {
    return (
      <Menu.Menu position='left'>
        <Link to='/home'>
          <Menu.Item name='home'>
            Home
          </Menu.Item>
        </Link>
      </Menu.Menu>
    )
  }
}

export default withRouter(DefaultMenuItems);