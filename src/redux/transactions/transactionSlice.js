import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transaction: 0,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    incrementByAmount(state, action) {
      state.transaction = action.payload;
    },
  },
});

export const { incrementByAmount } = transactionSlice.actions;
export default transactionSlice.reducer;
