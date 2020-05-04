// React
import React, {Component} from "react";
// Semantic-UI
import {Form, Button, TextArea, Label, Container, Modal, MenuItem, Header} from "semantic-ui-react";
// Redux
import {connect} from 'react-redux';
import {addBloodProduct, clearErrors} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class AddBloodProduct extends Component {

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

  handleOpen = () => {
    this.setState({ open: true })
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
        product: '',
        description: '',
        shelfLife: '',
        storagePrep: '',
        storageTemp: '',
        testingReq: '',
        volume: '',
        errors: {} });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({ errors: {} });
    const newBloodProduct = {
      product: this.state.product,
      description: this.state.description,
      shelfLife: this.state.shelfLife,
      storagePrep: this.state.storagePrep,
      storageTemp: this.state.storageTemp,
      testingReq: this.state.testingReq,
      volume: this.state.volume
    };
    this.props.addBloodProduct(newBloodProduct);
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
        trigger={<MenuItem onClick={this.handleOpen}>Add</MenuItem> }
        open={this.state.open}
        onClose={this.handleClose}
      >
        <Modal.Header>Add Blood Product</Modal.Header>
        <Modal.Content>
          <Form size='large'
                loading={!!loading}
                onSubmit={this.handleSubmit}>
            <Form.Input label='Product'
                        placeholder='Blood product name'
                        name='product'
                        value={this.state.product}
                        onChange={this.handleChange}
                        error={!!errors.product}
            />
            {errors.product && <Label pointing color='red'>{errors.product}</Label>}
            <Form.Input control={TextArea}
                        label='Description'
                        placeholder='Description'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        error={!!errors.description}
            />
            {errors.description && <Label pointing color='red'>{errors.description}</Label>}
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
            <Form.Input label='Storage Temperature'
                        placeholder='Storage temperature'
                        name='storageTemp'
                        value={this.state.storageTemp}
                        onChange={this.handleChange}
                        error={!!errors.storageTemp}
            />
            {errors.storageTemp && <Label pointing color='red'>{errors.storageTemp}</Label>}
            <Form.Input label='Compatibility Testing Requirement'
                        placeholder='Testing requirement'
                        name='testingReq'
                        value={this.state.testingReq}
                        onChange={this.handleChange}
                        error={!!errors.testingReq}
            />
            {errors.testingReq && <Label pointing color='red'>{errors.testingReq}</Label>}
            <Form.Input label='Volume'
                        placeholder='Volume'
                        name='volume'
                        value={this.state.volume}
                        onChange={this.handleChange}
                        error={!!errors.volume}
            />
            {errors.volume && <Label pointing color='red'>{errors.volume}</Label>}
            <Container>
              <Button type='submit' color='blue' size='large'>
                Add Blood Product
              </Button>
            </Container>
            {errors.general && <Label pointing color='red'>{errors.general}</Label> }
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

AddBloodProduct.propTypes = {
  addBloodProduct: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps, {addBloodProduct, clearErrors})(AddBloodProduct);