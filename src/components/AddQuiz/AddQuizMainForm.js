import React, { Component } from "react";
import AddQuizNameForm from "./AddQuizNameForm";
import AddQuizQuestionFrom from "./AddQuizQuestionFrom";

class AddQuizMainForm extends Component {

  state = {
    step: 1,
    quizName: '',
    quizDescription: ''
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

  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
  }

  render() {
    const { step, quizName, quizDescription } = this.state;
    const values = { quizName, quizDescription};
    switch (step) {
      case 1:
        return <AddQuizNameForm nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
              />;
      case 2:
        return <AddQuizQuestionFrom nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
              />;
      default:
        return null;
    }
  }
}

export default AddQuizMainForm;