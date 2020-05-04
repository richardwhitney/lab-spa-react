import React, {Component} from "react";
import {Card} from "semantic-ui-react";
import {Link} from "react-router-dom";

class BloodProduct extends Component {
  render() {
    const {bloodProduct: { product, description, productId }} = this.props;
    return (
      <Card as={Link}
            to={`/bloodProducts/${productId}`}
            header={product}
            description={description}
            color='green'
      />
    )
  }
}

export default BloodProduct;