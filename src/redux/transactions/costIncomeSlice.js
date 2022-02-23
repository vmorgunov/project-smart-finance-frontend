import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

import {
  getTransactionsByMonth,
  addTransaction,
  removeTransaction,
} from './costIncomeOperations';

const initialState = {
  items: [],
  transactions: [],
  error: null,
  isLoading: false,
  type: 'costs',
  date: Date.parse(new Date()),
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getTransactionType(state, { payload }) {
      state.type = payload;
    },
    getTransaction(state, { payload }) {
      state.transactions = payload;
    },
    setTransactionDate(state, { payload }) {
      state.date = payload;
    },
  },
  extraReducers: {
    [getTransactionsByMonth.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getTransactionsByMonth.fulfilled]: (state, { payload }) => {
      state.items = [payload?.data];
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
      state.items = state.items?.filter(el => el?._id !== payload);
      state.isLoading = false;
    },

    [removeTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const { getTransactionType, getTransaction, setTransactionDate } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
