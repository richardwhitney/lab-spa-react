import React, { Component, Fragment } from "react";
import {Segment, Dimmer, Loader, Header, Button, Container} from "semantic-ui-react";
import ReactPlayer from "react-player";
import '../App.css';
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuiz, addQuizResult} from "../redux/actions/dataActions";
import Question from "../components/Question";

class QuizDetail extends Component {

  state = {
    currentIndex: 0,
    score: 0,
    showFinished: false,
    step: 1
  };

  componentDidMount() {
    this.props.getQuiz(this.props.match.params.quizId);
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step : step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step : step - 1
    });
  };

  renderSwitch = () => {
    const { quiz: { title, description, questions }, UI: {loading}} = this.props;
    const { currentIndex, showFinished, score, step } = this.state;
    const currentQuestion = questions ? questions[currentIndex] : null;
    switch (step) {
      case 1:
        return (
          <Fragment>
            <Segment>
              <Header as='h3'>{title}</Header>
              <p>{description}</p>
            </Segment>
            <Container>
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                  width='100%'
                  height='100%'
                />
              </div>
            </Container>
            <Segment clearing>
              <Button floated='right' onClick={this.nextStep} size='large' color='blue'>Next</Button>
            </Segment>
          </Fragment>
        );
      case 2:
        return (
          <Fragment>

              <Question
                onNextClicked={this.onNextClicked}
                question={currentQuestion}
                key={currentQuestion.id}
              />

            <Segment>
              Question {currentIndex + 1} of {questions.length}
            </Segment>
          </Fragment>
        );
      case 3:
        return (
          <Fragment>
            <Segment>
              <p>Your results are out. You scored {score} out of {questions.length}</p>
            </Segment>
            <Button color='blue' size='large' onClick={this.resetQuiz}>Try again</Button>
            <Button color='green' size='large' onClick={this.submitQuiz}>Submit</Button>
          </Fragment>
        );
      default:
        return null;
    }
  };

  onNextClicked = (selectedOption, currentQuestion) => {
    if (currentQuestion.answer === selectedOption) {
      this.setState({
        score: this.state.score + 1
      });
    }
    if (this.state.currentIndex + 1 > this.props.quiz.questions.length -1) {
      this.nextStep();
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1
    });
  };

  resetQuiz = () => {
    this.setState({
      currentIndex: 0,
      score: 0,
      step: 1
    });
  };

  submitQuiz = () => {
    const newQuizResult = {
      quizName: this.props.quiz.title,
      score: this.state.score,
      userEmail: this.props.email
    };
    this.props.addQuizResult(newQuizResult, this.props.history);
  };

  render() {
    const { quiz: { title, description, questions }, UI: {loading}} = this.props;
    const { currentIndex, showFinished, score } = this.state;
    const currentQuestion = questions ? questions[currentIndex] : null;

    let quizData = !loading && questions ? (
      <Segment raised clearing style={{ marginTop: '7em'}}>
        <Segment stacked>
          {this.renderSwitch()}
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
  addQuizResult: PropTypes.func.isRequired,
  quiz: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  quiz: state.data.quiz,
  email: state.user.credentials.email,
  UI: state.UI
});

const mapActionsToProps = {
  getQuiz,
  addQuizResult
};

export default connect(mapStateToProps, mapActionsToProps)(QuizDetail)