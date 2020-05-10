import React, {Component} from "react";
import {Card, Loader, Dimmer, Container} from "semantic-ui-react";
import {connect} from 'react-redux';
import {getClinicalPathways} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';
import ClinicalPathway from "../components/ClinicalPathway";

class ClinicalPathwaysHub extends Component {

  componentDidMount() {
    this.props.getClinicalPathways();
  }

  render() {
    const {clinicalPathways, loading} = this.props.data;
    let pathwaysList = !loading ? (
      clinicalPathways.map((clinicalPathway) =>
        <ClinicalPathway key={clinicalPathway.clinicalPathwayId} clinicalPathway={clinicalPathway}/>
      )
    ) : (
      <Dimmer active inverted>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      <Container style={{ marginTop: '7em'}}>
        <Card.Group>
          {pathwaysList}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps, {getClinicalPathways})(ClinicalPathwaysHub);