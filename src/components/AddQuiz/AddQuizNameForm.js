import React, { Component } from "react";
import { Form, Button, Header } from 'semantic-ui-react';

class AddQuizNameForm extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form>
        <Header as='h4'>Quiz Details</Header>
        <Form.Input label='Name'
                    placeholder='Quiz name'
                    onChange={this.props.handleChange}
                    name='quizName'
                    value={values.quizName}
        />
        <Form.Input label='Description'
                    placeholder='Quiz description'
                    name='quizDescription'
                    onChange={this.props.handleChange}
                    value={values.quizDescription}
        />
        <Button onClick={this.saveAndContinue}>Save And Continue</Button>
      </Form>
    );
  }
}

export default AddQuizNameForm;