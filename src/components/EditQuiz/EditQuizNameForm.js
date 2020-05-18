import React, { Component } from "react";
import {Form, Button, Header, TextArea, Container} from 'semantic-ui-react';

class EditQuizNameForm extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep()
  };

  render() {
    const { values } = this.props;
    return (
      <Form>
        <Header as='h4'>Quiz Details</Header>
        <Form.Input label='Name'
                    placeholder='Quiz name'
                    onChange={this.props.handleChange}
                    name='title'
                    value={values.title}
        />
        <Form.Input label='Description'
                    control={TextArea}
                    placeholder='Quiz description'
                    name='description'
                    onChange={this.props.handleChange}
                    value={values.description}
        />
        <Form.Input label='Video Link'
                    placeholder='Leave empty if this quiz does not have a video'
                    name='videoUrl'
                    onChange={this.props.handleChange}
                    value={values.videoUrl}
        />
        <Container textAlign='right'>
          <Button onClick={this.saveAndContinue}>Next</Button>
        </Container>
      </Form>
    )
  }
}

export default EditQuizNameForm;