import React, {Component, Fragment} from "react";
import {Card, Loader, Dimmer, Header} from "semantic-ui-react";

import Test from '../components/Test';

import {connect} from 'react-redux';
import {getTests} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

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
      <Fragment>
        <Header as='h2' textAlign='center' style={{ marginTop: '7em'}}>{tests.length} Test(s)</Header>
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