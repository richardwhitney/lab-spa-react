import React, {Component, Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import {Menu} from "semantic-ui-react";

class QuizHubMenuItems extends Component {


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
          <Link to='/quizresults'>
            <Menu.Item name='quizresults'>
              Results
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Fragment>
    )
  }
}

export default withRouter(QuizHubMenuItems);