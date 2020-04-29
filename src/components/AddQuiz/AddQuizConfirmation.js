import React, { Component, Fragment } from "react";
import {Button, Header, List, Divider} from 'semantic-ui-react';

class AddQuizConfirmation extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: { quizName, quizDescription, questions}} = this.props;
    return (
      <Fragment>
        <Header as='h4'>Confirm Quiz Details</Header>
        <List>
          <List.Item>
            <List.Content>
              <List.Header>Quiz name</List.Header>
              <List.Description>{quizName}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Quiz Description</List.Header>
            <List.Description>{quizDescription}</List.Description>
          </List.Item>
          <Divider/>
          {
            questions.map((q, questionIndex) => {
              return (
                <Fragment key={questionIndex}>
                  <List.Item>
                    <List.Content>
                      <List.Header>Question {questionIndex + 1}</List.Header>
                      <List.Description>{q.question}</List.Description>
                    </List.Content>
                  </List.Item>
                  {
                    q.options.map((option, optionIndex) => {
                      return (
                        <Fragment key={optionIndex}>
                          <List.Item>
                            <List.Content>
                              <List.Header>Option {optionIndex + 1}</List.Header>
                              <List.Description>{option}</List.Description>
                            </List.Content>
                          </List.Item>
                        </Fragment>
                      )
                    })
                  }
                  <List.Item>
                    <List.Content>
                      <List.Header>Answer</List.Header>
                      <List.Description>{q.answer}</List.Description>
                    </List.Content>
                  </List.Item>
                  <Divider/>
                </Fragment>
              )
            })
          }

          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Confirm</Button>
        </List>
      </Fragment>
    )
  }
}

export default AddQuizConfirmation;