import React, {Component, Fragment} from "react";
import {Card, Loader, Dimmer, Header} from "semantic-ui-react";

import {connect} from 'react-redux';
import {getBloodProducts} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';
import BloodProduct from "../components/BloodProduct";
import BloodProductSearchBar from "../components/BloodProductSearchBar";

class BloodProductInformation extends Component{

  state = {
    search: "",
  };

  componentDidMount() {
    this.props.getBloodProducts();
  }

  handleChange = (type, value) => {
    this.setState({ search: value });
  };

  render() {
    const { bloodProducts, loading } = this.props.data;
    let filteredProducts = bloodProducts.filter(p => {
      const product = p.product;
      return product.toLocaleLowerCase().search(this.state.search.toLocaleLowerCase()) !== -1;
    });
    let productList = !loading ? (
      filteredProducts.map((product) =>
      <BloodProduct key={product.productId} bloodProduct={product}/>
      )
    ) : (
      <Dimmer active inverted>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      <Fragment>
        <Header as='h2' textAlign='center' style={{ marginTop: '7em'}}>{productList.length} Product(s)</Header>
        <BloodProductSearchBar onUserInput={this.handleChange}/>
        <Card.Group centered>
          {productList}
        </Card.Group>
      </Fragment>
    )
  }
}

BloodProductInformation.propTypes = {
  getBloodProducts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {getBloodProducts})(BloodProductInformation)