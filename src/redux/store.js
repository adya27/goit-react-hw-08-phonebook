import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  // auth,
  authReducer,
  // authSlice
} from "./auth/auth-reducers";
import { contactsReducer, filterReducer } from "./phonebook/reducers";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  //   loader: loadingReducer,
  auth: persistReducer(persistConfig, authReducer),
  // auth: authReducer,
});

// const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({ reducer: rootReducer });
export const persistor = persistStore(store);
