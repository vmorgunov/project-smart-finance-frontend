import { createSlice } from '@reduxjs/toolkit';
import pushBalance from './transactionOperations';
import {
  fetchBalance,
  fetchSummaryCosts,
  fetchSummaryIncome,
} from './transactionOperations';

const initialState = {
  balance: 0,
  income: {},
  costs: {},
  error: null,
  isLoading: false,
};

const totaBalanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [pushBalance.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },
    [pushBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload.data.balance;
      state.isLoading = false;
    },
    [pushBalance.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchBalance.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },
    [fetchBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload;
      state.isLoading = false;
    },
    [fetchBalance.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchSummaryCosts.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },
    [fetchSummaryCosts.fulfilled]: (state, { payload }) => {
      state.costs = payload.data;
      state.isLoading = true;
    },
    [fetchSummaryCosts.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchSummaryIncome.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },
    [fetchSummaryIncome.fulfilled]: (state, { payload }) => {
      state.income = payload.data;
      state.isLoading = true;
    },
    [fetchSummaryIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default totaBalanceSlice.reducer;

// import * as actions from './transactionActions';
// import { createReducer, combineReducers } from '@reduxjs/toolkit';

// const totalBalance = createReducer(0, {
//   [actions.setTotalBalanceSuccess]: (_, { payload }) => payload,
// });

// const transaction = combineReducers({
//   totalBalance,
// });

// export default transaction;

// const initialState = {
//   transaction: 0,
// };

// const transactionSlice = createSlice({
//   name: 'transaction',
//   initialState,
//   reducers: {
//     incrementByAmount(state, action) {
//       state.transaction = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(changeBalance.fulfilled, (state, action) => {
//       state.transaction = action.payload;
//     });
//   },
// });

// export const { incrementByAmount } = transactionSlice.actions;
// export const transactionReducer = transactionSlice.reducer;
