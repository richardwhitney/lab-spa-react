import React, { Component } from "react";
import AddQuizNameForm from "./AddQuizNameForm";
import AddQuizQuestionFrom from "./AddQuizQuestionFrom";
import AddQuizConfirmation from "./AddQuizConfirmation";

import { connect } from 'react-redux';
import { addQuiz, clearErrors } from "../../redux/actions/dataActions";
import PropTypes from 'prop-types';

class AddQuizMainForm extends Component {

  state = {
    step: 1,
    quizName: '',
    quizDescription: '',
    question: '',
    answer: '',
    questions: [],
    options: ['']
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

  addQuestion = () => {
    const newQuestion = { question: this.state.question, answer: this.state.answer, options: this.state.options };
    /*this.setState((prevState) => ({
      questions: [...prevState.questions, {question: '', answer: ''}]
    }));*/
    this.setState({
      questions: [...this.state.questions, newQuestion]
    });
    this.setState({ question: '', answer: '', options: [""] });
  };

  /*handleChange = input => event => {
    this.setState({ [input] : event.target.value })
  };*/

  handleChange = (e) => {
    if (e.target.name.includes("option")) {
      let index = e.target.name.split('-')[1];
      let options = [...this.state.options];
      options[index] = e.target.value;
      this.setState({ options: options })
    }
    else {
      this.setState({ [e.target.name ]: e.target.value })
    }
  };

  addOption = () => {
    this.setState((prevState) => ({
      options: [...prevState.options, ""]
    }));
  };

  addQuiz = () => {
    this.props.clearErrors();
    const newQuiz = {
      quizName: this.state.quizName,
      quizDescription: this.state.quizDescription,
      questions: this.state.questions
    };
    this.props.addQuiz(newQuiz);
  };

  render() {
    const { step, quizName, quizDescription, question, answer, options, questions } = this.state;
    const quizValues = { quizName, quizDescription};
    const questionValues = { question, answer };
    const confirmationValues = { quizName, quizDescription, questions };
    switch (step) {
      case 1:
        return <AddQuizNameForm nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={quizValues}
              />;
      case 2:
        return <AddQuizQuestionFrom nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    handleAddQuestion={this.addQuestion}
                                    handleAddOption={this.addOption}
                                    values={questionValues}
                                    options={options}
              />;
      case 3:
        return <AddQuizConfirmation prevStep={this.prevStep}
                                    handleAddQuiz={this.addQuiz}
                                    values={confirmationValues}
              />;
      default:
        return null;
    }
  }
}

AddQuizMainForm.propTypes = {
  addQuiz: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};


export default connect(null, {addQuiz, clearErrors})(AddQuizMainForm);