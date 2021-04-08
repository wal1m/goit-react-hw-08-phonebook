import axios from 'axios';
import * as actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:8080';

export const fetchContact = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
  //   .catch(error => dispatch(actions.fetchContactError(error)));
};

// export const addContact = () => async dispatch => {
//   dispatch(actions.addContactRequest());
//   try {
//     const { data } = await axios.post('/contacts');
//     dispatch(actions.addContactSuccess(data));
//   } catch (error) {
//     dispatch(actions.addContactError(error));
//   }
// };

export const addContact = contact => dispatch => {
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
