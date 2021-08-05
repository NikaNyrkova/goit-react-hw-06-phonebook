import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

import st from "./ContactList.module.css";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={st.list}>
      <ContactListItem contacts={contacts} deleteContact={deleteContacts} />
    </ul>
  );
};

const getVisibleContact = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
  );
};

const mapStateToProps = (state) => {
  const { phonebookContacts, phonebookFilter } = state;
  const visibleContacts = getVisibleContact(phonebookContacts, phonebookFilter);
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteContacts: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
