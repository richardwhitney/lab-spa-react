import React, {Component} from "react";
import {Container, Table, Header, Loader, Dimmer} from "semantic-ui-react";

import {connect} from 'react-redux';
import {editContact, deleteContact} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

class ContactsTable extends Component {

  render() {
    const {contacts, loading, admin} = this.props;
    let contactsList = !loading ? (
      contacts.map((result) =>
      <Table.Row key={result.contactId}>
        <Table.Cell>{result.name}</Table.Cell>
        <Table.Cell>{result.phone}</Table.Cell>
        <Table.Cell>{result.department}</Table.Cell>
        {admin && (
          <Table.Cell>
            <EditContact contact={result}/>
            <DeleteContact contactId={result.contactId}/>
          </Table.Cell>
        )}
      </Table.Row>
      )
    ) : (
      <Table.Row>
        <Table.Cell>
          <Dimmer active inverted>
            <Loader size='large'/>
          </Dimmer>
        </Table.Cell>
      </Table.Row>
    );
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
            {admin && (
              <Table.HeaderCell>Control</Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {contactsList}
        </Table.Body>
      </Table>
    )
  }
}

ContactsTable.propTypes = {
  loading: PropTypes.bool.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  admin: state.user.credentials.admin
});

export default connect(mapStateToProps, {editContact, deleteContact})(ContactsTable);