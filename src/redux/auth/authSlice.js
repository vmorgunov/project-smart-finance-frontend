import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signup, fetchCurrentUser } from './authOperations.js';

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
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.headers.acces_token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [signup.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [logIn.fulfilled]: (state, action) => {
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
      const params = new URL(document.location).searchParams;
      const acces_token = params.get('acces_token');

      state.isFetchingCurrent = true;
      if (acces_token) {
        state.token = acces_token;
      }
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrent = false;
    },
  },
});

export const authReducer = authSlice.reducer;
