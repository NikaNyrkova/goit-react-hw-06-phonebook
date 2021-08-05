import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import { contactsReducer, filterReducer } from './phonebook/phonebook-reducer';

const rootReducer = combineReducers({
    phonebookContacts: contactsReducer,
    phonebookFilter: filterReducer
});

export const store = createStore(rootReducer, composeWithDevTools());