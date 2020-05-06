import React, {Component} from "react";
import {Segment, Header, Container} from "semantic-ui-react";
import Markdown from 'react-markdown'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class MarkdownContainer extends Component {

  render() {
    const {markdown: {title, body}} = this.props;
    return (
      <Segment style={{ marginTop: '7em'}}>
        <Header as='h1' textAlign='center'>{title}</Header>
        <Container>
          <Segment stacked>
            <Markdown source={body}/>
          </Segment>
        </Container>
      </Segment>
    )
  }
}

MarkdownContainer.propTypes = {
  markdown: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  markdown: state.data.markdown
});

export default connect(mapStateToProps)(MarkdownContainer);