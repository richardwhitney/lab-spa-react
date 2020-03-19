import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Segment, Dimmer, Loader, Header, Button, Container} from "semantic-ui-react";
//Redux
import { connect } from 'react-redux';
import { getTest, deleteTest } from "../redux/actions/dataActions";

class TestDetail extends Component {

  componentDidMount() {
    this.props.getTest(this.props.testId);
  }

  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteTest(this.props.testId, this.props.history);
  }

  render() {
    const {test: {name, description, referenceRange, requestForm, specialNotes, specimenTypeVolume, turnaroundTime}, UI: {loading}} = this.props ;
    let testData = !loading ? (
      <Segment raised clearing style={{ marginTop: '7em'}}>
        <Header as='h3'>Name</Header>
        <p>{name}</p>
        <Header as='h3'>Description</Header>
        <p>{description}</p>
        <Header as='h3'>Reference Range</Header>
        <p>{referenceRange}</p>
        <Header as='h3'>Request From</Header>
        <p>{requestForm}</p>
        <Header as='h3'>Special Notes</Header>
        <p>{specialNotes}</p>
        <Header as='h3'>Specimen Type Volume</Header>
        <p>{specimenTypeVolume}</p>
        <Header as='h3'>Turnaround Time</Header>
        <p>{turnaroundTime}</p>
        <Container>
          <Button color="red" floated="right" onClick={this.handleDelete}>Delete</Button>
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
  deleteTest: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  test: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  test: state.data.test,
  testId: ownProps.match.params.testId,
  UI: state.UI
});

const mapActionsToProps = {
  getTest,
  deleteTest
};

export default connect(mapStateToProps, mapActionsToProps)(TestDetail);
