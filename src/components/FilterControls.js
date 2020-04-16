import React, { Component } from "react";
import {Select, Header, Input, Label, Container, Segment, Dropdown} from "semantic-ui-react";

const departments = [
  { key: '00', value: 'All', text: 'All' },
  { key: '01', value: 'Blood Transfusion', text: 'Blood Transfusion' },
  { key: '02', value: 'Haematology', text: 'Haematology' },
  { key: '03', value: 'Biochemistry', text: 'Biochemistry' },
  { key: '04', value: 'UHW - Microbiology', text: 'UHW - Microbiology' },
  { key: '05', value: 'UHW - Haematology', text: 'UHW - Haematology' },
  { key: '06', value: 'UHW - Biochemistry', text: 'UHW - Biochemistry' },
  { key: '07', value: 'UHW - Serology', text: 'UHW - Serology' },
  { key: '08', value: 'UHW - Histology', text: 'UHW - Histology'},
  { key: '09', value: 'External Referral', text: 'External Referral'}
];

class FilterControls extends Component {

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
        <Input label='Test Name'
               icon={{ name: 'search', circular: true}}
               placeholder='Search'
               name='name'
               onChange={this.handleTextChange}
        />
        <Dropdown label="Department"
               control={Select}
               selection
               options={departments}
               placeholder='Select department'
               name='department'
               onChange={this.handleDepartmentChange}
        />
      </Segment>
    )
  }
}

export default FilterControls;