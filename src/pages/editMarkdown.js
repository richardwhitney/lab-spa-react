import React, {Component, Fragment} from "react";
import {Form, TextArea, Segment, Container, Grid, Button} from "semantic-ui-react";
import { withRouter} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { connect } from 'react-redux';
import {editMarkdown} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

class EditMarkdown extends Component {
  state = {
    body: ''
  };

  mapMarkdownBodyToState = (markdown) => {
    this.setState({
      body: markdown.body ? markdown.body : ''
    });
  };

  componentDidMount() {
    this.mapMarkdownBodyToState(this.props.markdown);
  }

  handleChange = (event, result) => {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const updatedMarkdown = {
      body: this.state.body
    };
    this.props.editMarkdown(updatedMarkdown, this.props.markdown.markdownId, this.props.history);
  };

  render() {
    const {UI: {loading}} = this.props;
    return (
      <Fragment>
        <Grid columns={2} style={{ marginTop: '7em'}}>
          <Grid.Column>
            <Container>
              <Segment>
                <Form loading={!!loading} onSubmit={this.handleSubmit}>
                  <TextArea rows={60}
                            placeholder='Body'
                            name='body'
                            value={this.state.body}
                            onChange={this.handleChange}
                  />
                  <Container>
                    <Segment stacked>
                      <Button color='blue' size='large'>
                        Save
                      </Button>
                    </Segment>
                  </Container>
                </Form>
              </Segment>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container>
              <Segment>
                <ReactMarkdown source={this.state.body}/>
              </Segment>
            </Container>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }
}

EditMarkdown.propTypes = {
  markdown: PropTypes.object.isRequired,
  editMarkdown: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  markdown: state.data.markdown,
  UI: state.UI
});

export default withRouter(connect(mapStateToProps, {editMarkdown})(EditMarkdown));