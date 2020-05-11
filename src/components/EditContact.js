import React, { Component } from "react";
import {Button, Modal, Form, Container, Label} from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {editContact, clearErrors} from "../redux/actions/dataActions";

class EditContact extends Component {

  state = {
    name: '',
    phone: '',
    department: '',
    errors: {},
    open: false
  };

  mapContactDetailsToState = (contact) => {
    this.setState({
      name: contact.name ? contact.name : '',
      phone: contact.phone ? contact.phone : '',
      department: contact.department ? contact.department : ''
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
    this.mapContactDetailsToState(this.props.contact);
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
    this.props.clearErrors();
    this.setState({ errors: {} });
    const updatedContact = {
      name: this.state.name,
      phone: this.state.phone,
      department: this.state.department
    };
    this.props.editContact(updatedContact, this.props.contact.contactId);
  };

  render() {
    const {UI: {loading}} = this.props;
    const {errors} = this.state;
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Edit</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        >
        <Modal.Header>Edit Contact</Modal.Header>
        <Modal.Content>
          <Form size='large'
                loading={!!loading}
                onSubmit={this.handleSubmit}>
            <Form.Input label='Name'
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        error={!!errors.name}
            />
            {errors.name && <Label pointing color='red'>{errors.name}</Label>}
            <Form.Input label='Phone Number'
                        placeholder='Phone number'
                        name='phone'
                        value={this.state.phone}
                        onChange={this.handleChange}
                        error={!!errors.phone}
            />
            {errors.phone && <Label pointing color='red'>{errors.phone}</Label>}
            <Form.Input label='Department'
                        placeholder='Department'
                        name='department'
                        value={this.state.department}
                        onChange={this.handleChange}
                        error={!!errors.department}
            />
            {errors.department && <Label pointing color='red'>{errors.department}</Label>}
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

EditContact.propTypes = {
  editContact: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps, {editContact, clearErrors})(EditContact);