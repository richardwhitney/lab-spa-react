// React
import React, {Component} from "react";
// Semantic-UI
import {Modal, MenuItem, Icon} from "semantic-ui-react";
import AddQuizMainForm from "./AddQuizMainForm";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
        trigger={<MenuItem onClick={this.handleOpen}><Icon name='plus'/>Add</MenuItem> }
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

AddQuizModal.propTypes = {
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps)(AddQuizModal);