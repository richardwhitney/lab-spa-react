import React, { Component, Fragment } from "react";
import {Form, Button, Header, Icon, Container} from 'semantic-ui-react';

class EditQuizQuestionForm extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  handlePrevQuestion = (e) => {
    this.props.handlePrevQuestion();
  };

  handleNextQuestion = (e) => {
    this.props.handleNextQuestion();
  };

  handleAddQuestion = (e) => {
    this.props.handleAddQuestion();
  };

  handleAddOption = (e) => {
    e.preventDefault();
    this.props.handleAddOption();
  };

  handleDeleteOption = (e) => {
    e.preventDefault();
    this.props.handleDeleteOption();
  };

  render() {
    let { question, answer, options } = this.props.question;
    return (
      <Form>
        <Header as='h4'>Question Details</Header>
        <Container>
          <Button icon floated='left' onClick={this.handlePrevQuestion}><Icon name='chevron left'/></Button>
          <Button icon floated='right' onClick={this.handleNextQuestion}><Icon name='chevron right'/></Button>
        </Container>
        <Form.Input label={`Question #${this.props.questionIndex + 1}`}
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
                            onChange={this.props.handleOptionChange}
                />
              </Fragment>
            )
          })
        }
        <Container>
          <Button icon onClick={this.handleDeleteOption}><Icon name='minus'/></Button>
          <Button icon onClick={this.handleAddOption}><Icon name='plus'/></Button>
        </Container>
        <Form.Input label='Answer'
                    placeholder='Enter an answer'
                    onChange={this.props.handleNameAnswerChange}
                    value={answer}
                    name='answer'
        />
        <Button onClick={this.back}>Back</Button>
        <Button floated='right' onClick={this.saveAndContinue}>Next</Button>
      </Form>
    )
  }
}

export default EditQuizQuestionForm;