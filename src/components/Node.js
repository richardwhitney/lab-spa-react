import React, {Component} from "react";
import { Button, Header, Container} from "semantic-ui-react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNode, deleteNode } from "../redux/actions/dataActions";

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
      <Container>
        <div>
          <Header as='h4'>{description}</Header>
          {currentNodes.length > 1 && <Button floated='right' onClick={() => this.onBackButtonClicked()}>Back</Button> }
        </div>
        {options && options.map((option, index) => {
          return (
            <Button key={index} onClick={() => this.onNodeButtonClick(option.id)}>
              {option.label}
            </Button>
            )
        })}
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