import React, { Component } from "react";
import {Button, Modal, Form, Container, MenuItem, Label, TextArea, Select} from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { editBloodProduct, clearErrors } from "../redux/actions/dataActions";

class EditBloodProduct extends Component {

  state = {
    product: '',
    description: '',
    shelfLife: '',
    storagePrep: '',
    storageTemp: '',
    testingReq: '',
    volume: '',
    errors: {},
    open: false
  };

  mapBloodProductDetailsToState = (bloodProduct) => {
    this.setState({
      product: bloodProduct.product ? bloodProduct.product : '',
      description: bloodProduct.description ? bloodProduct.description : '',
      shelfLife: bloodProduct.shelfLife ? bloodProduct.shelfLife : '',
      storagePrep: bloodProduct.storagePrep ? bloodProduct.storagePrep : '',
      storageTemp: bloodProduct.storageTemp ? bloodProduct.storageTemp : '',
      testingReq: bloodProduct.testingReq ? bloodProduct.testingReq : '',
      volume: bloodProduct.volume ? bloodProduct.volume : ''
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
    this.mapBloodProductDetailsToState(this.props.bloodProduct);
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({ errors: {} });
    const updatedBloodProduct = {
      product: this.state.product,
      description: this.state.description,
      shelfLife: this.state.shelfLife,
      storagePrep: this.state.storagePrep,
      storageTemp: this.state.storageTemp,
      testingReq: this.state.testingReq,
      volume: this.state.volume
    };
    this.props.editBloodProduct(updatedBloodProduct, this.props.bloodProduct.productId);
  };

  render() {
    const {UI: {loading}} = this.props;
    const {errors} = this.state;
    return (
      <Modal
        trigger={<MenuItem onClick={this.handleOpen}>Edit</MenuItem>}
        open={this.state.open}
        onClose={this.handleClose}
      >
        <Modal.Header>Edit Blood Product</Modal.Header>
        <Modal.Content>
          <Form size='large'
                loading={!!loading}
                onSubmit={this.handleSubmit}>
            <Form.Input label='Product'
                        placeholder='Product'
                        name='product'
                        value={this.state.product}
                        onChange={this.handleChange}
                        error={!!errors.product}
            />
            {errors.product && <Label pointing color='red'>{errors.product}</Label> }
            <Form.Input label='General Description'
                        control={TextArea}
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        error={!!errors.description}
            />
            {errors.description && <Label pointing color='red'>{errors.description}</Label>}
            <Form.Input label='Volume'
                        placeholder='Volume'
                        name='volume'
                        value={this.state.volume}
                        onChange={this.handleChange}
                        error={!!errors.volume}
            />
            {errors.volume && <Label pointing color='red'>{errors.volume}</Label>}
            <Form.Input label='Storage Temperature'
                        placeholder='Storage temperature'
                        value={this.state.storageTemp}
                        onChange={this.handleChange}
                        error={!!errors.storageTemp}
            />
            {errors.storageTemp && <Label pointing color='red'>{errors.storageTemp}</Label>}
            <Form.Input label='Shelf Life'
                        placeholder='Shelf life'
                        name='shelfLife'
                        value={this.state.shelfLife}
                        onChange={this.handleChange}
                        error={!!errors.shelfLife}
            />
            {errors.shelfLife && <Label pointing color='red'>{errors.shelfLife}</Label>}
            <Form.Input label='Storage outside of controlled environment/after preparation'
                        control={TextArea}
                        placeholder='Storage preparation'
                        name='storagePrep'
                        value={this.state.storagePrep}
                        onChange={this.handleChange}
                        error={!!errors.storagePrep}
            />
            {errors.storagePrep && <Label pointing color='red'>{errors.storagePrep}</Label>}
            <Form.Input label='Compatibility Testing Requirement'
                        control={TextArea}
                        placeholder='Testing requirement'
                        name='testingReq'
                        value={this.state.testingReq}
                        onChange={this.handleChange}
                        error={!!errors.testingReq}
            />
            {errors.testingReq && <Label pointing color='red'>{errors.testingReq}</Label>}
            <Container>
              <Button color='blue' size='large'>
                Save
              </Button>
            </Container>
            {errors.general && <Label pointing color='red'>{errors.general}</Label> }
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

EditBloodProduct.propTypes = {
  editBloodProduct: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  bloodProduct: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  bloodProduct: state.data.bloodProduct,
  UI: state.UI
});

export default connect(mapStateToProps, { editBloodProduct, clearErrors })(EditBloodProduct);