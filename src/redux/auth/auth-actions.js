import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://goit-phonebook-api.herokuapp.com";
// const BASE_URL = "http://localhost:3004";

export const getCurrentUserInformation = createAsyncThunk(
  "getCurrentUserInformation",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/current`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/signup`,
        credentials
      );
      token.set(data.token);
      return await data;
    } catch (error) {
      rejectWithValue(error);
      console.log("error", error);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users/login`, credentials);
      token.set(data.token);
      return await data;
    } catch (error) {
      rejectWithValue(error);
      console.log("error", error);
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users/logout`);
      token.unset();
      return await data;
    } catch (error) {
      rejectWithValue(error);
      console.log("error", error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      console.log("no user");
      return thunkAPI.rejectWithValue("no user");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(`${BASE_URL}/users/current`);
      return data;
    } catch (error) {
      console.log(" fetchCurrentUser error", error);
    }
  }
);

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
