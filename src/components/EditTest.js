import React, { Component } from "react";
import {Button, Header, Icon, Modal, Form, Container, MenuItem} from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { editTest } from "../redux/actions/dataActions";

class EditTest extends Component {
  state = {
    name: '',
    description: '',
    referenceRange: '',
    requestForm: '',
    specialNotes: '',
    specimenTypeVolume: '',
    turnaroundTime: '',
    open: false
  };

  componentDidMount() {
  }

  mapTestDetailsToState = (test) => {
    this.setState({
      name: test.name ? test.name : '',
      description: test.description ? test.description : '',
      referenceRange: test.referenceRange ? test.referenceRange : '',
      requestForm: test.requestForm ? test.requestForm : '',
      specialNotes: test.specialNotes ? test.specialNotes : '',
      specimenTypeVolume: test.specimenTypeVolume ? test.specimenTypeVolume : '',
      turnaroundTime: test.turnaroundTime ? test.turnaroundTime : ''
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
    this.mapTestDetailsToState(this.props.test);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, result) => {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const updatedTest = {
      name: this.state.name,
      description: this.state.description,
      referenceRange: this.state.referenceRange,
      requestForm: this.state.requestForm,
      specialNotes: this.state.specialNotes,
      specimenTypeVolume: this.state.specimenTypeVolume,
      turnaroundTime: this.state.turnaroundTime
    };
    this.props.editTest(updatedTest, this.props.testId);
  };

  render() {
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}>Edit</MenuItem> }
        open={this.state.open}
        onClose={this.handleClose}
      >
        <Modal.Header>Edit Test</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              label="Name"
              placeholder = "Name"
              name = "name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Description"
              placeholder = "Description"
              name = "description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Reference Range"
              placeholder = "Reference range"
              name = "referenceRange"
              value={this.state.referenceRange}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Request Form"
              placeholder = "Request form"
              name = "requestForm"
              value={this.state.requestForm}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Special Notes"
              placeholder = "Special notes"
              name = "specialNotes"
              value={this.state.specialNotes}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Specimen Type Volume"
              placeholder = "Specimen type volume"
              name = "specimenTypeVolume"
              value={this.state.specimenTypeVolume}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Turnaround Time"
              placeholder = "Turnaround Time"
              name = "turnaroundTime"
              value={this.state.turnaroundTime}
              onChange={this.handleChange}
            />
            <Container>
              <Button color='blue' size='large'>
                Save
              </Button>
            </Container>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

EditTest.propTypes = {
  editTest: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  test: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  test: state.data.test,
  UI: state.UI
});

export default connect(mapStateToProps, { editTest })(EditTest);