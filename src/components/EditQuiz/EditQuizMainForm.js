import React, { Component } from "react";

import { connect } from 'react-redux';
import { editQuiz, clearErrors } from "../../redux/actions/dataActions";
import PropTypes from 'prop-types';
import EditQuizNameForm from "./EditQuizNameForm";
import EditQuizQuestionForm from "./EditQuizQuestionForm";

class EditQuizMainForm extends Component {

  state = {
    step: 1,
    questionIndex: 0,
    quiz: {
      title: '',
      description: '',
      questions: [
        {
          question: '',
          answer: '',
          options: []
        }
      ]
    }
  };

  mapQuizDetailsToState = (quiz) => {
    this.setState({
      quiz: quiz ? quiz : {}
    });
  };

  componentDidMount() {
    this.mapQuizDetailsToState(this.props.quiz);
  }

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

  nextQuestion = () => {
    const { questionIndex } = this.state;
    const { questions } = this.state.quiz;
    if (questionIndex < questions.length - 1) {
      this.setState({
        questionIndex: questionIndex + 1
      });
    }
  };

  prevQuestion = () => {
    const { questionIndex } = this.state;
    if (questionIndex >= 1) {
      this.setState({
        questionIndex: questionIndex - 1
      });
    }
  };

  addQuestion = () => {
    const newQuestion = { question: this.state.question, answer: this.state.answer, options: this.state.options };
    this.setState({
      questions: [...this.state.questions, newQuestion]
    });
    this.setState({ question: '', answer: '', options: [""] });
  };

  addOption = () => {
    const {questionIndex} = this.state;
    this.setState((prevState) => {
      let temp = {
        ...prevState,
        quiz: {...prevState.quiz}
      };
      console.log(temp);
      temp.quiz.questions[questionIndex].options.push("");
      console.log(temp);
      return temp;
    })
  };

  deleteOption = () => {
    const {questionIndex} = this.state;
    this.setState((prevState) => {
      let temp = {
        ...prevState,
        quiz: {...prevState.quiz}
      };
      if (temp.quiz.questions[questionIndex].options.length > 1)
        temp.quiz.questions[questionIndex].options.pop();
      return temp;
    })
  };

  handleQuestionOptionChange = (e) => {
    const { questionIndex } = this.state;
    const name = e.target.name;
    const value = e.target.value;

    const optionIndex = name.split('-')[1];
    this.setState((prevState) => {
      let temp = {
        ...prevState,
        quiz: {...prevState.quiz}
      };
      temp.quiz.questions[questionIndex].options[optionIndex] = value;
      return temp;
    })
  };

  handleQuestionNameAnswerChange = (e) => {
    const { questionIndex } = this.state;
    console.log(`Input name: ${e.target.name}, Input value: ${e.target.value}`);
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => {
      let temp = {
        ...prevState,
        quiz: {...prevState.quiz}
      };
      console.log(temp);
      temp.quiz.questions[questionIndex][name] = value;
      console.log(JSON.stringify(temp));
      return temp;
    })
  };

  handleChange = (e) => {
    const { questionIndex } = this.state;
    if (e.target.name.includes("option")) {
      let index = e.target.name.split('-')[1];
      let options = [...this.state.quiz.questions[questionIndex].options];
      options[index] = e.target.value;
      this.setState(() => ({ options}))
    }
    else {
      const quiz = { ...this.state.quiz, [e.target.name]: e.target.value };
      this.setState(() => ({ quiz }));
    }
  };

  addQuiz = () => {
    this.props.clearErrors();
    const updatedQuiz = {
      quizName: this.state.quizName,
      quizDescription: this.state.quizDescription,
      questions: this.state.questions
    };
    this.props.editQuiz(updatedQuiz, this.props.quiz.quizId);
  };

  render() {
    const { step, quiz: {title, description, questions}, questionIndex } = this.state;
    const quizValues = { title, description };
    const question = questions[questionIndex];
    const confirmationValues = { title, description, questions };
    switch (step) {
      case 1:
        return <EditQuizNameForm nextStep={this.nextStep}
                                 handleChange={this.handleChange}
                                 values={quizValues}/>;
      case 2:
        return <EditQuizQuestionForm nextStep={this.nextStep}
                                     prevStep={this.prevStep}
                                     handleNameAnswerChange={this.handleQuestionNameAnswerChange}
                                     handleOptionChange={this.handleQuestionOptionChange}
                                     handleNextQuestion={this.nextQuestion}
                                     handlePrevQuestion={this.prevQuestion}
                                     handleAddQuestion={this.addQuestion}
                                     handleAddOption={this.addOption}
                                     handleDeleteOption={this.deleteOption}
                                     questionIndex={questionIndex}
                                     question={question}/>;
      case 3:
        return null;
      default:
        return null;
    }
  }
}

EditQuizMainForm.propsTypes = {
  editQuiz: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  quiz: state.data.quiz
});

export default connect(mapStateToProps, {editQuiz, clearErrors})(EditQuizMainForm);