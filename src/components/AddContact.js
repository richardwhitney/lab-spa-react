// React
import React, {Component} from "react";
// Semantic-UI
import {Form, Button, Label, Container, Modal, MenuItem} from "semantic-ui-react";
// Redux
import {connect} from 'react-redux';
import {addContact, clearErrors} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class AddContact extends Component {

  state = {
    name: '',
    phone: '',
    department: '',
    errors: {},
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.clearErrors();
    this.setState({open: false, errors: {} });
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        open: false,
        name: '',
        phone: '',
        department: '',
        errors: {} });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({ errors: {} });
    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      department: this.state.department
    };
    this.props.addContact(newContact);
  };

  handleChange = (event, result) => {
    const { name, value } = result;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {UI: {loading}} = this.props;
    const {errors} = this.state;
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}>Add</MenuItem>}
        open={this.state.open}
        onClose={this.handleClose}
        >
        <Modal.Header>Add Contact</Modal.Header>
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
              <Button  type='submit' color='blue' size='large'>
                Add Contact
              </Button>
            </Container>
            {errors.general && <Label pointing color='red'>{errors.general}</Label> }
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps, {addContact, clearErrors})(AddContact);