import React, {Component} from "react";
import { Button, Header, Container} from "semantic-ui-react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNode} from "../redux/actions/dataActions";

class Node extends Component {

  onNodeButtonClick = (id) => {
    console.log(`Node id: ${id}`);
    this.props.getNode(id);
  };

  render() {
    const {currentNode: {description, options}} = this.props;
    return (
      <Container>
        <Header as='h4'>{description}</Header>
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
  getNode: PropTypes.func.isRequired,
  currentNode: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  currentNode: state.data.currentNode
});

export default connect(mapStateToProps, {getNode})(Node);