import React from "react";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";
import { getVisibleContact } from "../../redux/phonebook/phonebook-selectors";

import st from "./ContactList.module.css";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  return (
    <ul className={st.list}>
      <ContactListItem
        contacts={contacts}
        deleteContact={(id) => dispatch(phonebookActions.deleteContact(id))}
      />
    </ul>
  );
};

export default ContactList;
