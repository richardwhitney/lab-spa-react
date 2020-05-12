import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {Icon, Menu} from "semantic-ui-react";

class QuizDetailMenuItems extends Component {

  render() {
    return (
      <Menu.Menu position='left'>
        <Link to='/quizhub'>
          <Menu.Item name='quizhub'>
            <Icon name='chevron left'/>
            Quiz Hub
          </Menu.Item>
        </Link>
      </Menu.Menu>
    )
  }
}

export default withRouter(QuizDetailMenuItems);