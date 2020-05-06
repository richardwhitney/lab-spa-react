import React, {Component} from "react";
import {Segment, Header, Container} from "semantic-ui-react";
import {connect} from 'react-redux';
import {getContacts} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';

import ContactsTable from "../components/ContactsTable";

class Contacts extends Component {

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const {contacts} = this.props.data;
    return (
      <Container>
        <Segment style={{ marginTop: '7em'}}>
          <Header as='h3'>Contacts</Header>
          <ContactsTable contacts={contacts}/>
        </Segment>
      </Container>
    )
  }
}

Contacts.propTypes = {
  getContacts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {getContacts})(Contacts);