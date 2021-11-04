import { createReducer, combineReducers } from "@reduxjs/toolkit";
import phonebookActions from "./phonebook-actions";
import initialState from "../../data/contacts-test";
import { addWithCheck } from "../../redux/phonebook/phonebook-selectors";

const contactsReducer = createReducer(initialState, {
  [phonebookActions.addContact]: addWithCheck,
  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [phonebookActions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  phonebookContacts: contactsReducer,
  phonebookFilter: filterReducer,
});
