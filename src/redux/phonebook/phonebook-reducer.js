import { createReducer, combineReducers } from "@reduxjs/toolkit";
import phonebookActions from "./phonebook-actions";
import initialState from "../../data/contacts-test";

const contactsReducer = createReducer(initialState, {
  // [phonebookActions.addContact]: (state, { payload }) => [...state, payload],
  [phonebookActions.addContact]: (state, {payload}) => (state.some(
    (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
  )
  ? alert(`${payload.name} is already in contacts.`)
  : state.some((contact) => contact.number === payload.number)
    ? alert(`${payload.number} is already in contacts.`)
    : [...state, payload]),
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

// function noRepeatContact(state, {payload}) {
  
// }

// import types from './phonebook-types';
// export const contactsReducer = (state = [], {type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];

//         case types.DELETE:
//             return state.filter(({ id }) => id !== payload);

//         default:
//             return state;
//     }
// };

// export const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.FILTER:
//             return payload;

//         default:
//             return state;
//     }
// };
