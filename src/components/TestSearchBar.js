import React, { Component } from 'react'
import _ from 'lodash'
import { Search, Label, Header, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const initialState = { isLoading: false, results: [], value: '' };

const resultRenderer = ({ name, testId }) => <Label as={Link} to={`/tests/${testId}`}>{name}</Label>;

resultRenderer.propTypes = {
  name: PropTypes.string
};

class TestSearchBar extends Component {

  state = initialState;

  handleResultSelect = (e, { result }) => this.setState({ value: result.name });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.name);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.data.tests, isMatch),
      });
    }, 300)
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        size='mini'
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        resultRenderer={resultRenderer}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(TestSearchBar);