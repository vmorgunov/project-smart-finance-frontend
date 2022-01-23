import { createSlice } from '@reduxjs/toolkit';

import {
  getTransactionsByMonth,
  addTransaction,
  removeTransaction,
} from './costIncomeOperations';

const initialState = {
  items: [],
  sums: [],
  error: null,
  isLoading: false,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [getTransactionsByMonth.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getTransactionsByMonth.fulfilled]: (state, { payload }) => {
      state.items = [payload?.data];
      state.sums = payload?.sums;
      state.isLoading = false;
    },

    [getTransactionsByMonth.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [addTransaction.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [addTransaction.fulfilled]: (state, { payload }) => {
      state.items = [payload, ...state.items];
      state.isLoading = false;
    },

    [addTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [removeTransaction.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [removeTransaction.fulfilled]: (state, { payload }) => {
      console.log(state.items, payload);
      state.items = state.items.filter(el => el._id !== payload);
      state.isLoading = false;
    },

    [removeTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default transactionsSlice.reducer;
