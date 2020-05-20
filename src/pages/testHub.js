import React, {Component, Fragment} from "react";
import {Card, Loader, Dimmer, Container, Statistic} from "semantic-ui-react";

import Test from '../components/Test';

import {connect} from 'react-redux';
import {getTests} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';
import FilterControls from "../components/FilterControls";

class TestHub extends Component{

  state = {
    search: "",
    department: "All"
  };

  componentDidMount() {
    this.props.getTests();
  }

  handleChange = (type, value) => {
    type === "name"
    ? this.setState( { search: value })
      : this.setState({ department: value });
  };

  render() {
    const {tests, loading} = this.props.data;
    let filteredTests = tests.filter(t => {
      const name = t.name;
      return name.toLocaleLowerCase().search(this.state.search.toLocaleLowerCase()) !== -1;
    });
    filteredTests = this.state.department === "All"
    ? filteredTests
      : filteredTests.filter(t => t.department === this.state.department);

    let testList = !loading ? (
      filteredTests
        .map((test) =>
      <Test key={test.testId} test={test}/>
      )
    ) : (
      <Dimmer active inverted>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      <Fragment>
        <Container textAlign='center'>
          <Statistic style={{ marginTop: '7em'}}>
            <Statistic.Value>{testList.length}</Statistic.Value>
            <Statistic.Label>Test(s) Found</Statistic.Label>
          </Statistic>
        </Container>

        <FilterControls onUserInput={this.handleChange}/>
        <Card.Group centered>
          {testList}
        </Card.Group>
      </Fragment>
    )
  }
}

TestHub.propTypes = {
  getTests: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {getTests})(TestHub);