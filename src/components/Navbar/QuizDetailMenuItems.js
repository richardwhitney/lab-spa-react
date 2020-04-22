import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

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