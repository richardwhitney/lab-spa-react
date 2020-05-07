import React, { Component } from "react";
import {Button, Modal, Form, Container, Label, Icon, TextArea} from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {editNewsItem, clearErrors} from "../redux/actions/dataActions";

class EditNewsItem extends Component {

  state = {
    title: '',
    body: '',
    errors: {},
    open: false
  };

  mapNewsItemDetailsToState = (newsItem) => {
    this.setState({
      title: newsItem.title ? newsItem.title : '',
      body: newsItem.body ? newsItem.body : ''
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
    this.mapNewsItemDetailsToState(this.props.newsItem);
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
    const updatedNewsItem = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.editNewsItem(updatedNewsItem, this.props.newsItem.newsItemId);
  };

  render() {
    const {UI: {loading}} = this.props;
    const {errors} = this.state;
    return (
      <Modal
        trigger={<Button icon onClick={this.handleOpen}><Icon name='edit'/></Button>}
        open={this.state.open}
        onClose={this.handleClose}
        >
        <Modal.Header>Edit News Item</Modal.Header>
        <Modal.Content>
          <Form size='large'
                loading={!!loading}
                onSubmit={this.handleSubmit}>
            <Form.Input label='Title'
                        placeholder='Title'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}
                        error={!!errors.title}
            />
            {errors.title && <Label pointing color='red'>{errors.title}</Label>}
            <Form.Input label='Body'
                        control={TextArea}
                        placeholder='Body...'
                        value={this.state.body}
                        onChange={this.handleChange}
                        error={!!errors.body}
            />
            {errors.body && <Label pointing color='red'>{errors.body}</Label>}
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

EditNewsItem.propTypes = {
  editNewsItem: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  newsItem: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps, {editNewsItem, clearErrors})(EditNewsItem);