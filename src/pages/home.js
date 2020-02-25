import React, {Component} from "react";
import {Grid, Card} from "semantic-ui-react";
import axios from 'axios';

import Test from '../components/Test';

class Home extends Component{

  state = {
    tests: null
  };

  componentDidMount() {
    axios.get('/tests')
      .then(result => {
        console.log(result.data);
        this.setState({
          tests: result.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    let testList = this.state.tests ? (
      this.state.tests.map((test) => <Test key={test.testId} test={test}/>)
    ) : <p>Loading...</p>;
    return (
      <Grid columns={2} padded>
        <Grid.Column width={6}>
          <Card.Group centered>
            {testList}
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={10}>
          Add Test
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home