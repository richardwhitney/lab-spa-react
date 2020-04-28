import React, { Component } from "react";
import { Form, Button, Header } from 'semantic-ui-react';

class AddQuizNameForm extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    return (
      <Form>
        <Header as='h4'>Quiz Details</Header>
        <Form.Input label='Name'
                    placeholder='Quiz name'
                    onChange={this.props.handleChange('quizName')}
                    defaultValue={values.quizName}
        />
        <Form.Input label='Description'
                    placeholder='Quiz description'
                    onChange={this.props.handleChange('quizDescription')}
                    defaultValue={values.quizDescription}
        />
        <Button onClick={this.saveAndContinue}>Save And Continue</Button>
      </Form>
    );
  }
}

export default AddQuizNameForm;