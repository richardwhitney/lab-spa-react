import React, { Component } from "react";
import { Input, Segment} from "semantic-ui-react";

class BloodProductSearchBar extends Component {

  handleChange = (e, type, value) => {
    e.preventDefault();
    this.props.onUserInput(type, value);
  };

  handleTextChange = e => {
    this.handleChange(e, 'name', e.target.value);
  };

  handleDepartmentChange = (event, result) => {
    const { value } = result;
    console.log(`Select change ${value}`);
    this.handleChange(event, 'department', value);
  };

  render() {
    return (
      <Segment>
        <Input label='Product Name'
               icon={{ name: 'search', circular: true}}
               placeholder='Search'
               name='product'
               onChange={this.handleTextChange}
        />
      </Segment>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default BloodProductSearchBar;