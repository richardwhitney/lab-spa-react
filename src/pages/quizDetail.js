import React, { Component } from "react";
import {Segment, Dimmer, Loader, Header, Button} from "semantic-ui-react";
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuiz} from "../redux/actions/dataActions";
import Question from "../components/Question";

class QuizDetail extends Component {

  state = {
    currentIndex: 0,
    score: 0,
    showFinished: false
  };

  componentDidMount() {
    this.props.getQuiz(this.props.match.params.quizId);
  };

  onNextClicked = (selectedOption, currentQuestion) => {
    if (currentQuestion.answer === selectedOption) {
      this.setState({
        score: this.state.score + 1
      });
    }
    if (this.state.currentIndex + 1 > this.props.quiz.questions.length -1) {
      this.setState({
        showFinished: true
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1
    });
  };

  resetQuiz = () => {
    this.setState({
      currentIndex: 0,
      score: 0,
      showFinished: false
    });
  };

  render() {
    const { quiz: { title, description, questions }, UI: {loading}} = this.props;
    const { currentIndex, showFinished, score } = this.state;
    const currentQuestion = questions ? questions[currentIndex] : null;

    let quizData = !loading && questions ? (
      <Segment raised clearing style={{ marginTop: '7em'}}>
        {console.log("Finished loading")}
        <Segment stacked>
          <Header as='h3'>{title}</Header>
          <p>{description}</p>
          {showFinished ? (
          <Segment>
            {console.log("Quiz finished")}
            <p>Your results are out. You scored {score} out of {questions.length}</p>
          </Segment>
          ) : (
            <Segment>
              <Question
                onNextClicked={this.onNextClicked}
                question={currentQuestion}
                key={currentQuestion.id}
              />
            </Segment>
          )}
          {showFinished ? (
            <Button color='blue' size='large' onClick={this.resetQuiz}>Try again</Button>
          ) : (
            <Segment>
              {console.log("Here")}
              Question {currentIndex + 1} of {questions.length}
            </Segment>
          )}
        </Segment>
      </Segment>
    ) : (
      <Dimmer active inverted style={{ marginTop: '7em'}}>
        {console.log("Loading")}
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      quizData
    )
  }
}

QuizDetail.propTypes = {
  getQuiz: PropTypes.func.isRequired,
  quiz: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  quiz: state.data.quiz,
  UI: state.UI
});

const mapActionsToProps = {
  getQuiz
};

export default connect(mapStateToProps, mapActionsToProps)(QuizDetail)