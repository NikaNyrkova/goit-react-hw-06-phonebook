import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook-add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const deleteContact = createAction("phonebook-delete");
const filterContacts = createAction("phonebook-filter");

export default {
  addContact,
  deleteContact,
  filterContacts,
};
