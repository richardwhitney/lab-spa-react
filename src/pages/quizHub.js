import React, {Component} from "react";
import {Card, Loader, Dimmer, Container} from "semantic-ui-react";

import Quiz from "../components/Quiz";

import {connect} from 'react-redux';
import {getQuizzes} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class QuizHub extends Component {

  componentDidMount() {
    this.props.getQuizzes();
  }

  render() {
    const { quizzes, loading } = this.props.data;
    let quizList = !loading ? (
      quizzes.map((quiz) =>
      <Quiz key={quiz.quizId} quiz={quiz}/>
      )
    ) : (
      <Dimmer active inverted>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      <Container style={{ marginTop: '7em'}}>
        <Card.Group>
          {quizList}
        </Card.Group>
      </Container>
    )
  }
}

QuizHub.propTypes = {
  getQuizzes: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {getQuizzes})(QuizHub);