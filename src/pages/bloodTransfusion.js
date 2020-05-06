import React, {Component} from "react";
import {Dimmer, Loader} from "semantic-ui-react";
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarkdown } from "../redux/actions/dataActions";
import MarkdownContainer from "../components/MarkdownContainer";

class BloodTransfusion extends Component{

  componentDidMount() {
    this.props.getMarkdown('bloodTransfusion');
  }

  render() {
    const {UI: {loading}} = this.props;
    if (loading) {
      return (
        <Dimmer active inverted style={{ marginTop: '7em'}}>
          <Loader size='large'/>
        </Dimmer>
      )
    }
    else {
      return (
        <MarkdownContainer/>
      )
    }
  }
}

BloodTransfusion.propTypes = {
  getMarkdown: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(mapStateToProps, {getMarkdown})(BloodTransfusion);