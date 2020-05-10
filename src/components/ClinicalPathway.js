import React, { Component } from "react";
import {Card} from "semantic-ui-react";
import {Link} from "react-router-dom";

class ClinicalPathway extends Component {
  render() {
    const {clinicalPathway: {title, description, clinicalPathwayId}} = this.props;
    return (
      <Card fluid
            as={Link}
            to={`clinicalPathways/${clinicalPathwayId}`}
      >
        <Card.Content header={title}/>
        <Card.Content description={description}/>
      </Card>
    )
  }
}

export default ClinicalPathway;
