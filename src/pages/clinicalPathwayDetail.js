import React, { Component, Fragment } from "react";
import {Segment, Dimmer, Loader, Header, Button, Container} from "semantic-ui-react";
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getClinicalPathway} from "../redux/actions/dataActions";
import Node from "../components/Node";

class ClinicalPathwayDetail extends Component {

  componentDidMount() {
    this.props.getClinicalPathway(this.props.match.params.clinicalPathwayId);
  }

  render() {
    const { clinicalPathway: {title, description, nodes}, UI: {loading}} = this.props;

    let pathwayData = !loading && nodes ? (
      <Fragment>
        <Segment raised clearing style={{ marginTop: '7em'}}>
          <Header as='h3'>{title}</Header>
          <p>{description}</p>
        </Segment>
        <Container>
          <Segment clearing>
            <Node/>
          </Segment>
        </Container>
      </Fragment>
    ) : (
      <Dimmer active inverted style={{ marginTop: '7em'}}>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      pathwayData
    )
  }
}

ClinicalPathwayDetail.propTypes = {
  getClinicalPathway: PropTypes.func.isRequired,
  clinicalPathway: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  clinicalPathway: state.data.clinicalPathway,
  UI: state.UI
});

export default connect(mapStateToProps, {getClinicalPathway})(ClinicalPathwayDetail);