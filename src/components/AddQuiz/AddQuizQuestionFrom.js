import React, { Component } from "react";
import { Form, Button, Header } from 'semantic-ui-react';

class AddQuizQuestionFrom extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form>
        <Header as='h4'>Question Details</Header>
        <Form.Input label='Question'
                    placeholder='Question name'
                    onChange={this.props.handleChange('quizName')}
                    defaultValue={values.quizName}
        />
        <Form.Input label='Answer'
                    placeholder='Question answer'
                    onChange={this.props.handleChange('quizDescription')}
                    defaultValue={values.quizDescription}
        />
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue</Button>
      </Form>
    );
  }
}

export default AddQuizQuestionFrom;