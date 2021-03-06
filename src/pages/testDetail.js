import React, { Component } from "react";
import {Segment, Dimmer, Loader, Header, Container} from "semantic-ui-react";
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTest } from "../redux/actions/dataActions";

class TestDetail extends Component {

  componentDidMount() {
    this.props.getTest(this.props.match.params.testId);
  };

  render() {
    const {test: {name, department, requestForm, specimenType, specimenContainer, specimenVolume, specimenRequirements, turnaroundTime, phoneAlertLimits, specialNotes}, UI: {loading}} = this.props ;
    let testData = !loading ? (
      <Segment raised clearing style={{ marginTop: '7em'}}>
        <Container>
          <Segment stacked>
            <Header as='h3'>Name</Header>
            <p>{name}</p>
            <Header as='h3'>Department</Header>
            <p>{department}</p>
            <Header as='h3'>Request From</Header>
            <p>{requestForm}</p>
            <Header as='h3'>Specimen Type</Header>
            <p>{specimenType}</p>
            <Header as='h3'>Specimen Container</Header>
            <p>{specimenContainer}</p>
            <Header as='h3'>Specimen Volume</Header>
            <p>{specimenVolume}</p>
            <Header as='h3'>Specimen Requirements</Header>
            <p>{specimenRequirements}</p>
            <Header as='h3'>Turnaround Time</Header>
            <p>{turnaroundTime}</p>
            <Header as='h3'>Phone Alert Limits</Header>
            <p>{phoneAlertLimits}</p>
            <Header as='h3'>Special Notes</Header>
            <p>{specialNotes}</p>
          </Segment>
        </Container>
      </Segment>
    ) : (
      <Dimmer active inverted style={{ marginTop: '7em'}}>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      testData
    )
  }
}

TestDetail.propTypes = {
  getTest: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  test: state.data.test,
  UI: state.UI
});

const mapActionsToProps = {
  getTest
};

export default connect(mapStateToProps, mapActionsToProps)(TestDetail);
