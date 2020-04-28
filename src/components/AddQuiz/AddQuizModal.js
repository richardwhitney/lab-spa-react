// React
import React, {Component} from "react";
// Semantic-UI
import {Modal, MenuItem} from "semantic-ui-react";
import AddQuizMainForm from "./AddQuizMainForm";

class AddQuizModal extends Component {
  state = {

    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}>Add</MenuItem> }
        open={this.state.open}
        onClose={this.handleClose}
        >
        <Modal.Header>Add Quiz</Modal.Header>
        <Modal.Content>
          <AddQuizMainForm/>
        </Modal.Content>
      </Modal>
    )
  };
}

export default AddQuizModal;