import React, {Component} from "react";
import {Modal, Button, Header} from "semantic-ui-react";

import { connect } from 'react-redux';
import { deleteContact } from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class DeleteContact extends Component{

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  deleteContact = () => {
    this.props.deleteContact(this.props.contactId);
    //this.setState({ open: false });
  };

  render() {
    const { loading } = this.props;
    return (
      <Modal
        trigger={<Button color='red' onClick={this.handleOpen} floated='right'>Delete</Button>}
        open={this.state.open}
        onClose={this.handleClose}
      >
        <Header content='Delete Contact'/>
        <Modal.Content>
          <p>Are you sure you want to delete this contact?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={this.handleClose}>Cancel</Button>
          <Button color='red' onClick={this.deleteContact}>Delete</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

DeleteContact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.UI.loading
});

export default connect(mapStateToProps, {deleteContact})(DeleteContact);