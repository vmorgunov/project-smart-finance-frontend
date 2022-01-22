import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsPreMonthForChart } from './transactionOperations';

const initialState = {};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  extraReducers: {
    [getTransactionsPreMonthForChart.fulfilled]: (state, action) => {
      state.chart = { ...action.payload.data };
      state.error = null;
    },
  },
});

export const chartReducer = chartSlice.reducer;
