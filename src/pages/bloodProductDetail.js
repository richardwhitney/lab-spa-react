import React, { Component } from "react";
import {Segment, Dimmer, Loader, Header} from "semantic-ui-react";
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBloodProduct} from "../redux/actions/dataActions";

class BloodProductDetail extends Component {

  componentDidMount() {
    this.props.getBloodProduct(this.props.match.params.productId);
  };

  render() {
    const {bloodProduct: {product, description, shelfLife, storagePrep, storageTemp, testingReq, volume}, UI: {loading}} = this.props;
    let productData = !loading ? (
      <Segment raised clearing style={{ marginTop: '7em'}}>
        <Segment stacked>
          <Header as='h3'>Product</Header>
          <p>{product}</p>
          <Header as='h3'>General Description</Header>
          <p>{description}</p>
          <Header as='h3'>Volume</Header>
          <p>{volume}</p>
          <Header as='h3'>Storage Temp</Header>
          <p>{storageTemp}</p>
          <Header as='h3'>Shelf Life</Header>
          <p>{shelfLife}</p>
          <Header as='h3'>Storage outside of controlled environment/after preparation</Header>
          <p>{storagePrep}</p>
          <Header as='h3'>Compatibility Testing Requirement</Header>
          <p>{testingReq}</p>
        </Segment>
      </Segment>
    ) : (
      <Dimmer active inverted style={{ marginTop: '7em'}}>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      productData
    )
  }
}

BloodProductDetail.propTyeps = {
  getBloodProduct: PropTypes.func.isRequired,
  bloodProduct: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  bloodProduct: state.data.bloodProduct,
  UI: state.UI
});

export default connect(mapStateToProps, {getBloodProduct})(BloodProductDetail);