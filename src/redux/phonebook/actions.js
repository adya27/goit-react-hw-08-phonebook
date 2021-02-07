import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://goit-phonebook-api.herokuapp.com";
// const BASE_URL = "http://localhost:3004";

export const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/contacts`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
      return await data;
    } catch (error) {
      rejectWithValue(error);
      console.log("error", error);
    }
  }
);

export const deleteContact = createAsyncThunk("deleteContact", async (id) => {
  await axios.delete(`${BASE_URL}/contacts/${id}`);
  return id;
});

export const addFilter = createAction("addFilter");
