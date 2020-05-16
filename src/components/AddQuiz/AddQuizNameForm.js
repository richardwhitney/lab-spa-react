import React, { Component } from "react";
import {Form, Button, Header, TextArea} from 'semantic-ui-react';

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
                    control={TextArea}
                    placeholder='Quiz description'
                    name='quizDescription'
                    onChange={this.props.handleChange}
                    value={values.quizDescription}
        />
        <Button onClick={this.saveAndContinue}>Next</Button>
      </Form>
    );
  }
}

export default AddQuizNameForm;