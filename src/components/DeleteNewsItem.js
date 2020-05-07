import React, {Component} from "react";
import {Modal, Button, Header, Icon} from "semantic-ui-react";

import { connect } from 'react-redux';
import { deleteNewsItem } from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class DeleteNewsItem extends Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  deleteNewsItem = () => {
    this.props.deleteNewsItem(this.props.newsItemId);
  }

  render() {
    return (
      <Modal
        trigger={<Button icon onClick={this.handleOpen}><Icon name='trash'/></Button>}
        open={this.state.open}
        onClose={this.handleClose}
        >
        <Header content='Delete News Item'/>
        <Modal.Content>
          <p>Are you sure you want to delete this news item?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={this.handleClose}>Cancel</Button>
          <Button color='red' onClick={this.deleteNewsItem}>Delete</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

DeleteNewsItem.propTypes = {
  deleteNewsItem: PropTypes.func.isRequired,
  newsItemId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.UI.loading
});

export default connect(mapStateToProps, {deleteNewsItem})(DeleteNewsItem);