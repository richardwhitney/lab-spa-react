import React, {Component} from "react";
import {Modal, Button, MenuItem, Header, Icon} from "semantic-ui-react";
import { withRouter} from "react-router-dom";

import { connect } from 'react-redux';
import { deleteQuiz } from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class DeleteQuiz extends Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteQuiz = () => {
    console.log(`Quiz id delete: ${this.props.quizId}`);
    this.props.deleteQuiz(this.props.quizId, this.props.history);
    this.setState({open: false });
  };

  render() {
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}><Icon name='trash'/>Delete</MenuItem>}
        open={this.state.open}
        onClose={this.handleClose}
      >
        <Header content='Delete Quiz'/>
        <Modal.Content>
          <p>Are you sure you want to delete this quiz</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={this.handleClose}>Cancel</Button>
          <Button color='red' onClick={this.deleteQuiz}>Delete</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

DeleteQuiz.propTypes = {
  deleteQuiz: PropTypes.func.isRequired
};

export default withRouter(connect(null, {deleteQuiz})(DeleteQuiz));