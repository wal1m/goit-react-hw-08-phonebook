// import { combineReducers } from 'redux';
import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';
import contactReducer from './contacts/contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];


const store = configureStore({
  reducer: {
    contacts:  contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;
