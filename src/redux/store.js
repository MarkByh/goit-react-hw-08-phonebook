// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterSlice.reducer,
//   },
// });


import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore, persistReducer,
  FLUSH, REHYDRATE,
  PAUSE,
  PERSIST, PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterSlice } from './filterSlice';
import { contactsReducer } from './contactsSllice/contactsSlice';

// import { filterSlice } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';
// import { contactsReducer } from './contacts/contactsSlice';
const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
];
// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth', storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer, filter: filterSlice.reducer,
  }, middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);