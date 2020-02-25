import React, {Component} from "react";
import {Card} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Test extends Component{
  render() {
    const {test: { name, description, testId} } = this.props;
    return (
      <Card as={Link}
            to={`/tests/${testId}`}
            header={name}
            description={description}
            color='green'
      />
    )
  }
}

export default Test;