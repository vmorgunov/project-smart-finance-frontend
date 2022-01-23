import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsPreMonthForChart } from './transactionOperations';

const initialState = {
  isFulfilled: false,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  extraReducers: {
    [getTransactionsPreMonthForChart.fulfilled]: (state, action) => {
      state.chart = { ...action.payload.data };
      state.error = null;
      state.isFulfilled = true;
    },
  },
});

export const chartReducer = chartSlice.reducer;
