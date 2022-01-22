import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, fetchCurrentUser } from './authOperations.js';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.headers.acces_token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [logIn.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.user = action.payload.data.user;
      state.token = action.payload.data.headers.acces_token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [logOut.fulfilled]: state => {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [logOut.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrent = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrent = false;
    },
  },
});

export const authReducer = authSlice.reducer;
