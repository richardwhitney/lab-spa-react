import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {Icon, Menu} from "semantic-ui-react";

class DefaultMenuItems extends Component {

  render() {
    return (
      <Menu.Menu position='left'>
        <Link to='/home'>
          <Menu.Item name='home'>
            <Icon name='chevron left'/>
            Home
          </Menu.Item>
        </Link>
      </Menu.Menu>
    )
  }
}

export default withRouter(DefaultMenuItems);