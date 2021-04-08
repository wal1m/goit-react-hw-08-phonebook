import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { addContactSuccess } from './contacts-operations';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  filterContacts,
} from './contacts-actions';

const initialState = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialState, {
  [fetchContactSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
