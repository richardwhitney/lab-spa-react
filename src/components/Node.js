import React, {Component, Fragment} from "react";
import {Button, Header, Container, Divider, CardGroup, Card} from "semantic-ui-react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNode, deleteNode } from "../redux/actions/dataActions";
import index from "react-player";

class Node extends Component {

  onNodeButtonClick = (id) => {
    this.props.addNode(id);
  };

  onBackButtonClicked = () => {
    this.props.deleteNode();
  };

  render() {
    const {currentNodes} = this.props.data;
    const currentNode = currentNodes[currentNodes.length - 1];
    const {description, options} = currentNode;
    return (
      <Container textAlign='center'>
        <div>
          <Header as='h3'>{description}</Header>
        </div>
        <Divider horizontal/>
        <Container textAlign='center'>
          {options && <CardGroup centered>
            {options.map((option, index) => {
              return (
                <Card header={option.label}
                      onClick={() => this.onNodeButtonClick(option.id)}
                      color='green'
                      key={index}
                />
              )
            })}
          </CardGroup> }
        </Container>
        {currentNodes.length > 1 && <Button floated='right' onClick={() => this.onBackButtonClicked()}>Back</Button> }
      </Container>
    )
  }
}

Node.propTypes = {
  addNode: PropTypes.func.isRequired,
  deleteNode: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps, { addNode, deleteNode })(Node);