// React
import React, {Component} from "react";
// Semantic-UI
import {Form, Button, TextArea, Label, Container, Modal, MenuItem, Icon} from "semantic-ui-react";
// Redux
import {connect} from 'react-redux';
import {addNewsItem, clearErrors} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class AddNewsItem extends Component {

  state = {
    title: '',
    body: '',
    errors: {},
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
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
        title: '',
        body: '',
        errors: {} });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.clearErrors();
    this.setState({ errors: {} });
    const newNewsItem = {
      title: this.state.title,
      body: this.state.body,
      author: this.props.email
    };
    this.props.addNewsItem(newNewsItem);
  };

  handleChange = (event, result) => {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {UI: {loading}} = this.props;
    const {errors} = this.state;
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}><Icon name='plus'/>Add</MenuItem>}
        open={this.state.open}
        onClose={this.handleClose}
        >
        <Modal.Header>Add News Item</Modal.Header>
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
                        name='body'
                        value={this.state.body}
                        onChange={this.handleChange}
                        error={!!errors.body}
            />
            {errors.body && <Label pointing color='red'>{errors.body}</Label>}
            <Container>
              <Button type='submit' color='blue' size='large'>
                Add News Item
              </Button>
            </Container>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

AddNewsItem.propTypes = {
  addNewsItem: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  email: state.user.credentials.email
});

export default connect(mapStateToProps, {addNewsItem, clearErrors})(AddNewsItem)
