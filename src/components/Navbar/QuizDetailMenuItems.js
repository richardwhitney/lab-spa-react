import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class QuizDetailMenuItems extends Component {

  render() {
    return (
      <Menu.Menu position='left'>
        <Link to='/quizhub'>
          <Menu.Item name='quizhub'>
            Quiz Hub
          </Menu.Item>
        </Link>
      </Menu.Menu>
    )
  }
}

export default withRouter(QuizDetailMenuItems);