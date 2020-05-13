import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {Icon, Menu} from "semantic-ui-react";
import {connect} from "react-redux";
import DeleteQuiz from "../DeleteQuiz";

class QuizDetailMenuItems extends Component {

  render() {
    const { admin, quiz: { quizId }} = this.props;
    return (
      <Fragment>
        <Menu.Menu position='left'>
          <Link to='/quizhub'>
            <Menu.Item name='quizhub'>
              <Icon name='chevron left'/>
              Quiz Hub
            </Menu.Item>
          </Link>
        </Menu.Menu>
        {admin && (
          <Menu.Menu position='right'>
            <DeleteQuiz quizId={quizId}/>
          </Menu.Menu>
        )}
      </Fragment>

    )
  }
}

const mapStateToProps = (state) => ({
  quiz: state.data.quiz,
  admin: state.user.credentials.admin
});

export default withRouter(connect(mapStateToProps)(QuizDetailMenuItems));