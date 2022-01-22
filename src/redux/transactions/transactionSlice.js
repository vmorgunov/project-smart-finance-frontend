import * as actions from './transactionActions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';

const totalBalance = createReducer(0, {
  [actions.setTotalBalanceSuccess]: (_, { payload }) => payload,
});

const transaction = combineReducers({
  totalBalance,
});

export default transaction;

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
