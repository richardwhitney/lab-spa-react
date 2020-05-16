import React, {Component} from "react";
import {Card} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Quiz extends Component {
  render() {
    const { quiz: { title, description, quizId }} = this.props;
    return (
      <Card as={Link}
            fluid
            to={`/quizzes/${quizId}`}
            header={title}
            description={description}
            color='green'
      />

    )
  }
}

export default Quiz;