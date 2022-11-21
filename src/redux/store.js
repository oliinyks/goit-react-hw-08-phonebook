import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/slice';
import authSlice from './auth/slice';
import {filterReducer} from './filter/FilterSlice'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
	 filter: filterReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware({
	serializableCheck: {
	  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
}),
});

export const persistor = persistStore(store);
