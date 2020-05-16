import React, { Component, Fragment } from "react";
import {Button, Header, List, Divider, Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';

class EditQuizConfirmation extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.handleUpdateQuiz();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { quiz: { title, description, questions }, UI: { loading }} = this.props;
    return (
      <Fragment>
        <Header as='h4'>Confirm Quiz Details</Header>
        <Segment basic loading={!!loading}>
          <List>
            <List.Item>
              <List.Content>
                <List.Header>Quiz name</List.Header>
                <List.Description>{title}</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Quiz Description</List.Header>
              <List.Description>{description}</List.Description>
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
            <Button floated='right' onClick={this.saveAndContinue}>Confirm</Button>
          </List>
        </Segment>
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps)(EditQuizConfirmation);