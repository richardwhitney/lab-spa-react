import React, {Component} from "react";
import {Modal, Button, MenuItem, Header} from "semantic-ui-react";
import { withRouter} from "react-router-dom";

import { connect } from 'react-redux';
import { deleteTest } from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class DeleteTest extends Component{

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  deleteTest = () => {
    console.log('handle delete clicked');
    this.props.deleteTest(this.props.testId, this.props.history);
    this.setState({ open: false });
  };

  render() {
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}>Delete</MenuItem>}
        open={this.state.open}
        onClose={this.handleClose}
        >
        <Header content='Delete Test'/>
        <Modal.Content>
          <p>Are you sure you wish to delete this test?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={this.handleClose}>Cancel</Button>
          <Button color='red' onClick={this.deleteTest}>Delete</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

DeleteTest.propTypes = {
  deleteTest: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired
};


export default withRouter(connect(null, {deleteTest})(DeleteTest));