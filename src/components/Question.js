import React, {Component, Fragment} from "react";
import {Segment, Button, Header, Grid, Container} from "semantic-ui-react";

class Question extends  Component {

  state = {
    answered: false,
    selectedOption: {}
  };

  onOptionClicked = option => {
    this.setState({
      answered: true,
      selectedOption: option
    });
  };

  isCorrect = option => {
    return option === this.props.question.answer;
  };

  resetQuestion = () => {
    this.setState({
      answered: false,
      selectedOption: {}
    });
    this.props.onNextClicked(this.state.selectedOption, this.props.question);
  };

  render() {
    const { question } = this.props;
    const { answered } = this.state;
    return (
      <Fragment>
        <Segment>
          {answered && <Button color='blue' size='large' onClick={this.resetQuestion}>Next</Button> }
          <Header as='h3'>{question.question}</Header>
        </Segment>
        <Container>
          <Grid columns={1}>

            {question.options.map((option, index) => {
              return (
                <Grid.Row key={index}>
                  <Button
                    key={index}
                    onClick={() => this.onOptionClicked(option)}
                    color={`${answered && this.isCorrect(option) && "green"}
                    ${this.state.selectedOption === option && !this.isCorrect(option) && "red"}`}
                  >
                    {option}
                  </Button>
                </Grid.Row>
              )
            })}

          </Grid>

        </Container>
      </Fragment>
    )
  }
}

export default Question;