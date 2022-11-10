import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './ContactSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
