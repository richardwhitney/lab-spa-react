import React, {Component} from "react";
import {Grid, Card, Loader, Dimmer} from "semantic-ui-react";

import Test from '../components/Test';

import {connect} from 'react-redux';
import {getTests} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';
import AddTest from "../components/AddTest";

class TestHub extends Component{

  componentDidMount() {
    this.props.getTests();
  }

  render() {
    const {tests, loading} = this.props.data;
    let testList = !loading ? (
      tests.map((test) =>
        <Test key={test.testId} test={test}/>
      )
    ) : (
      <Dimmer active inverted>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      <Grid columns={2} padded style={{ marginTop: '7em'}}>
        <Grid.Column width={6}>
          <Card.Group centered>
            {testList}
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={10}>
          <AddTest />
        </Grid.Column>
      </Grid>
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