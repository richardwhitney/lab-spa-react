// React
import React, {Component} from "react";
// Semantic-UI
import {Modal, MenuItem, Icon} from "semantic-ui-react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AddQuizMainForm from "../AddQuiz/AddQuizMainForm";
import EditQuizMainForm from "./EditQuizMainForm";

class EditQuizModal extends Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}><Icon name='edit'/>Edit</MenuItem> }
        open={this.state.open}
        onClose={this.handleClose}
      >
        <Modal.Header>Edit Quiz</Modal.Header>
        <Modal.Content>
          <EditQuizMainForm/>
        </Modal.Content>
      </Modal>
    )
  };
}

EditQuizModal.propsTypes = {
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps)(EditQuizModal);