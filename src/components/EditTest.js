import React, { Component } from "react";
import {Button, Modal, Form, Container, MenuItem, Label, TextArea, Select} from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { editTest, clearErrors } from "../redux/actions/dataActions";

const departments = [
  { key: '01', value: 'Blood Transfusion', text: 'Blood Transfusion' },
  { key: '02', value: 'Haematology', text: 'Haematology' },
  { key: '03', value: 'Biochemistry', text: 'Biochemistry' },
  { key: '04', value: 'UHW - Microbiology', text: 'UHW - Microbiology' },
  { key: '05', value: 'UHW - Haematology', text: 'UHW - Haematology' },
  { key: '06', value: 'UHW - Biochemistry', text: 'UHW - Biochemistry' },
  { key: '07', value: 'UHW - Serology', text: 'UHW - Serology' },
  { key: '08', value: 'UHW - Histology', text: 'UHW - Histology'},
  { key: '09', value: 'External Referral', text: 'External Referral'}
];

class EditTest extends Component {
  state = {
    name: '',
    department: '',
    departmentId: '',
    requestForm: '',
    specimenType: '',
    specimenContainer: '',
    specimenVolume: '',
    specimenRequirements: '',
    turnaroundTime: '',
    phoneAlertLimits: '',
    specialNotes: '',
    errors: {},
    open: false
  };

  mapTestDetailsToState = (test) => {
    this.setState({
      name: test.name ? test.name : '',
      department: test.department ? test.department : '',
      requestForm: test.requestForm ? test.requestForm : '',
      specimenType: test.specimenType ? test.specimenType : '',
      specimenContainer: test.specimenContainer ? test.specimenContainer : '',
      specimenVolume: test.specimenVolume ? test.specimenVolume : '',
      specimenRequirements: test.specimenRequirements ? test.specimenRequirements : '',
      turnaroundTime: test.turnaroundTime ? test.turnaroundTime : '',
      phoneAlertLimits: test.phoneAlertLimits ? test.phoneAlertLimits : '',
      specialNotes: test.specialNotes ? test.specialNotes : ''
    });
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ open: false, errors: {} });
    }
  }

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

  handleSelectChange = (event, result) => {
    const { value } = result;
    console.log(`Select value: ${value}`);
    const { key } = result.options.find(o => o.value === value);
    this.setState({
      department: value,
      departmentId: key
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.clearErrors();
    this.setState({ errors: {} });
    const updatedTest = {
      name: this.state.name,
      department: this.state.department,
      requestForm: this.state.requestForm,
      specimenType: this.state.specimenType,
      specimenContainer: this.state.specimenContainer,
      specimenVolume: this.state.specimenVolume,
      specimenRequirements: this.state.specimenRequirements,
      turnaroundTime: this.state.turnaroundTime,
      phoneAlertLimits: this.state.phoneAlertLimits,
      specialNotes: this.state.specialNotes
    };
    this.props.editTest(updatedTest, this.props.test.testId);
  };

  render() {
    const {UI: {loading}} = this.props;
    const {errors} = this.state;
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}>Edit</MenuItem> }
        open={this.state.open}
        onClose={this.handleClose}
      >
        <Modal.Header>Edit Test</Modal.Header>
        <Modal.Content>
          <Form size='large'
                loading={!!loading}
                onSubmit={this.handleSubmit}>
            <Form.Input fluid
                        placeholder='Test name'
                        label='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        error={!!errors.name}
            />
            {errors.name && <Label pointing color='red'>{errors.name}</Label>}
            <Form.Input label='Department'
                        control={Select}
                        selection
                        options={departments}
                        placeholder='Select department'
                        name='department'
                        value={this.state.department}
                        onChange={this.handleSelectChange}
                        error={!!errors.department}
            />
            {errors.department && <Label pointing color='red'>{errors.department}</Label>}
            <Form.Input fluid
                        label='Request Form'
                        placeholder='Request form'
                        name='requestForm'
                        value={this.state.requestForm}
                        onChange={this.handleChange}
                        error={!!errors.requestForm}
            />
            {errors.requestForm && <Label pointing color='red'>{errors.requestForm}</Label>}
            <Form.Input fluid
                        label='Specimen Type'
                        placeholder='Specimen type'
                        name='specimenType'
                        value={this.state.specimenType}
                        onChange={this.handleChange}
                        error={!!errors.specimenType}
            />
            {errors.specimenType && <Label pointing color='red'>{errors.specimenType}</Label>}
            <Form.Input fluid
                        label='Specimen Volume'
                        placeholder='Specimen volume'
                        name='specimenVolume'
                        value={this.state.specimenVolume}
                        onChange={this.handleChange}
                        error={!!errors.specimenVolume}
            />
            {errors.specimenVolume && <Label pointing color='red'>{errors.specimenVolume}</Label>}
            <Form.Input fluid
                        label='Specimen Requirements'
                        placeholder='Specimen Requirements'
                        name='specimenRequirements'
                        value={this.state.specimenRequirements}
                        onChange={this.handleChange}
            />
            <Form.Input fluid
                        label='Turnaround Time'
                        placeholder='Turnaround time'
                        name='turnaroundTime'
                        value={this.state.turnaroundTime}
                        onChange={this.handleChange}
                        error={!!errors.turnaroundTime}
            />
            {errors.turnaroundTime && <Label pointing color='red'>{errors.turnaroundTime}</Label>}
            <Form.Input fluid
                        label='Phone Alert Limits'
                        placeholder='Phone alert limits'
                        name='phoneAlertLimits'
                        value={this.state.phoneAlertLimits}
                        onChange={this.handleChange}
            />
            <Form.Input control={TextArea}
                        label='Special Notes'
                        placeholder='Special notes'
                        name='specialNotes'
                        value={this.state.specialNotes}
                        onChange={this.handleChange}
            />
            <Container>
              <Button color='blue' size='large'>
                Save
              </Button>
            </Container>
            {errors.general && <Label pointing color='red'>{errors.general}</Label>}
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

EditTest.propTypes = {
  editTest: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  test: state.data.test,
  UI: state.UI
});

export default connect(mapStateToProps, { editTest, clearErrors })(EditTest);