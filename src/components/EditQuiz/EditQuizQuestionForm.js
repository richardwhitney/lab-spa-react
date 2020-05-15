import React, { Component, Fragment } from "react";
import { Form, Button, Header, Icon } from 'semantic-ui-react';

class EditQuizQuestionForm extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleAddQuestion = (e) => {
    this.props.handleAddQuestion();
  };

  handleAddOption = (e) => {
    e.preventDefault();
    this.props.handleAddOption();
  };

  render() {
    let { question, answer, options } = this.props.question;
    return (
      <Form>
        <Header as='h4'>Question Details</Header>
        <Form.Input label='Question'
                    placeholder='Enter a question'
                    onChange={this.props.handleNameAnswerChange}
                    value={question}
                    name='question'
        />
        {
          options.map((val, idx) => {
            let optionId = `option-${idx}`;
            return (
              <Fragment key={idx}>
                <Form.Input label={`Option #${idx + 1}`}
                            name={optionId}
                            value={val}
                            onChange={this.props.handleChange}
                />
              </Fragment>
            )
          })
        }
        <Button icon onClick={this.handleAddOption}><Icon name='plus'/></Button>
        <Form.Input label='Answer'
                    placeholder='Enter an answer'
                    onChange={this.props.handleNameAnswerChange}
                    value={answer}
                    name='answer'
        />
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.handleAddQuestion}>Add Question</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue</Button>
      </Form>
    )
  }
}

export default EditQuizQuestionForm;