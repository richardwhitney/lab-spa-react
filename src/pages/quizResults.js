import React, {Component} from "react";
import {Segment, Table, Header, Loader, Dimmer} from "semantic-ui-react";

import {connect} from 'react-redux';
import {getQuizResults} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class QuizResults extends Component{

  componentDidMount() {
    this.props.getQuizResults();
  }

  render() {
    const { quizResults, loading} = this.props.data;
    let resultsList = !loading ? (
      quizResults.map((result) =>
        <Table.Row key={result.quizResultId}>
          <Table.Cell>{result.userEmail}</Table.Cell>
          <Table.Cell>{result.quizName}</Table.Cell>
          <Table.Cell>{result.score}</Table.Cell>
          <Table.Cell>{result.date}</Table.Cell>
        </Table.Row>
      )
    ) : (
      <Table.Row>
        <Table.Cell>
          <Dimmer active inverted>
            <Loader size='large'/>
          </Dimmer>
        </Table.Cell>
      </Table.Row>
    );
    return (
      <Segment style={{ marginTop: '7em'}}>
        <Header as='h3'>Results</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>User Email</Table.HeaderCell>
              <Table.HeaderCell>Quiz</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {resultsList}
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

QuizResults.propTypes = {
  getQuizResults: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {getQuizResults})(QuizResults);