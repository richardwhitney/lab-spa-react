import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { editTest } from "../redux/actions/dataActions";

class EditTest extends Component {
  state = {
    name: '',
    description: '',
    referenceRange: '',
    requestForm: '',
    specialNotes: '',
    specimenTypeVolume: '',
    turnaroundTime: '',
    open: false
  };

  componentDidMount() {
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

EditTest.propTypes = {
  editTest: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { editTest })(EditTest);