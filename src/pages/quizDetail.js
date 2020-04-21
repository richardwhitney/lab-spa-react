import React, { Component } from "react";
import {Segment, Dimmer, Loader, Header} from "semantic-ui-react";
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuiz} from "../redux/actions/dataActions";

class QuizDetail extends Component {

  componentDidMount() {
    this.props.getQuiz(this.props.match.params.quizId);
  };

  render() {
    const { quiz: { title, description }, UI: {loading}} = this.props;
    let quizData = !loading ? (
      <Segment raised clearing style={{ marginTop: '7em'}}>
        <Segment stacked>
          <Header as='h3'>{title}</Header>
          <p>{description}</p>
        </Segment>
      </Segment>
    ) : (
      <Dimmer active inverted style={{ marginTop: '7em'}}>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      quizData
    )
  }
}

QuizDetail.propTypes = {
  getQuiz: PropTypes.func.isRequired,
  quiz: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  quiz: state.data.quiz,
  UI: state.UI
});

const mapActionsToProps = {
  getQuiz
};

export default connect(mapStateToProps, mapActionsToProps)(QuizDetail)