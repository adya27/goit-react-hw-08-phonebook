import { combineReducers, createReducer, createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUserInformation,
  register,
  login,
  logout,
  fetchCurrentUser,
} from "./auth-actions";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;

// const user = createReducer(initialUserState, {});
// const token = createReducer(null, {});
// const error = createReducer(null, {});

// export const auth = combineReducers({
//   user,
//   token,
//   error,
// });
