import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "././contacts/slice.js";
import { filtersReducer } from "././filters/slice.js";
import { authReducer } from "../redux/auth/slice.js";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth-data',
  version: 1,
  storage,
  whitelist: ["token"],
}

const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
      contacts: persistReducer(persistConfig, contactsReducer),
      filter: filtersReducer,
      auth: persistedReducer,
  },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);