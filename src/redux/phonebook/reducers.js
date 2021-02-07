import { createReducer, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, addFilter } from "./actions";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const filterReducer = createReducer("", {
  [addFilter]: (_, { payload }) => payload.toLowerCase(),
});
