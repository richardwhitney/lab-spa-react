import React, {Component} from "react";
import {Modal, Button, MenuItem, Header} from "semantic-ui-react";
import { withRouter} from "react-router-dom";

import { connect } from 'react-redux';
import { deleteBloodProduct } from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class DeleteBloodProduct extends Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteBloodProduct = () => {
    this.props.deleteBloodProduct(this.props.productId, this.props.history);
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
          <p>Are you sure you want to delete this blood product</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={this.handleClose}>Cancel</Button>
          <Button color='red' onClick={this.deleteBloodProduct}>Delete</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

DeleteBloodProduct.propTypes = {
  deleteBloodProduct: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired
};

export default withRouter(connect(null, {deleteBloodProduct})(DeleteBloodProduct));