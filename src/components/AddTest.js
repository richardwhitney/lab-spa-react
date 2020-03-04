// React
import React, {Component} from "react";
// Semantic-UI
import {Form, Button, Segment, Header, TextArea, Label} from "semantic-ui-react";
// Redux
import {connect} from 'react-redux';
import {addTest} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class AddTest extends Component {

  state = {
    name: '',
    description: '',
    referenceRange: '',
    requestForm: '',
    specialNotes: '',
    specimenTypeVolume: '',
    turnaroundTime: '',
    errors: {}
  };

  static getDerivedStateFromProps(props, state) {
    if (props.UI.errors) {
      return { errors: props.UI.errors };
    }
    return null;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTest = {
      name: this.state.name,
      description: this.state.description,
      referenceRange: this.state.referenceRange,
      requestForm: this.state.requestForm,
      specialNotes: this.state.specialNotes,
      specimenTypeVolume: this.state.specimenTypeVolume,
      turnaroundTime: this.state.turnaroundTime
    };
    this.props.addTest(newTest);
  };

  handleChange = (event, result) => {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {UI: {loading}} = this.props;
    const {errors} = this.state;
    return (
      <Form size='large'
            loading={!!loading}
            onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Header as='h3'>Add Test</Header>
          <Form.Input fluid
                      placeholder='Test name'
                      name='name'
                      value={this.state.name}
                      onChange={this.handleChange}
                      error={!!errors.name}
          />
          {errors.name && <Label pointing color='red'>{errors.name}</Label>}
          <Form.Input control={TextArea}
                      placeholder='Test description'
                      name='description'
                      value={this.state.description}
                      onChange={this.handleChange}
                      error={!!errors.description}
          />
          {errors.description && <Label pointing color='red'>{errors.description}</Label>}
          <Form.Input fluid
                      placeholder='Reference range'
                      name='referenceRange'
                      value={this.state.referenceRange}
                      onChange={this.handleChange}
                      error={!!errors.referenceRange}
          />
          {errors.referenceRange && <Label pointing color='red'>{errors.referenceRange}</Label>}
          <Form.Input fluid
                      placeholder='Request form'
                      name='requestForm'
                      value={this.state.requestForm}
                      onChange={this.handleChange}
                      error={!!errors.requestForm}
          />
          {errors.requestForm && <Label pointing color='red'>{errors.requestForm}</Label>}
          <Form.Input control={TextArea}
                      placeholder='Special notes'
                      name='specialNotes'
                      value={this.state.specialNotes}
                      onChange={this.handleChange}
                      error={!!errors.specialNotes}
          />
          {errors.specialNotes && <Label pointing color='red'>{errors.specialNotes}</Label>}
          <Form.Input fluid
                      placeholder='Specimen type volume'
                      name='specimenTypeVolume'
                      value={this.state.specimenTypeVolume}
                      onChange={this.handleChange}
                      error={!!errors.specimenTypeVolume}
          />
          {errors.specimenTypeVolume && <Label pointing color='red'>{errors.specimenTypeVolume}</Label>}
          <Form.Input fluid
                      placeholder='Turnaround time'
                      name='turnaroundTime'
                      value={this.state.turnaroundTime}
                      onChange={this.handleChange}
                      error={!!errors.turnaroundTime}
          />
          {errors.turnaroundTime && <Label pointing color='red'>{errors.turnaroundTime}</Label>}
          <Button color='blue' fluid size='large'>
            Add Test
          </Button>
          {errors.general && <Label pointing color='red'>{errors.general}</Label>}
        </Segment>
      </Form>
    )
  }
}

AddTest.propTypes = {
  addTest: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default  connect(mapStateToProps, {addTest})(AddTest);