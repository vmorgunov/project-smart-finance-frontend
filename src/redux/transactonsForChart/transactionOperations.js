import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTransactionsDATA } from '../../api/reportApi';

import axios from 'axios';

axios.defaults.baseURL = 'https://project-smart-finance.herokuapp.com/api/v1/';

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const getTransactionsPreMonthForChart = createAsyncThunk(
  'user/transactionsForChart',
  async ({ year, month, type, userToken }, thunkAPI) => {
    const AuthStr = 'Bearer '.concat(userToken);
    try {
      const { data } = await axios.get(
        `/transactions/${year}/${month}/${type}/data`,
        { headers: { Authorization: AuthStr } },
      );
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const getTotalSum = createAsyncThunk(
  'user/transactionsForChart',
  async ({ year, month, type, userToken }, thunkAPI) => {
    const AuthStr = 'Bearer '.concat(userToken);
    try {
      const { data } = await axios.get(
        `/transactions/${year}/${month}/${type}/data`,
        { headers: { Authorization: AuthStr } },
      );
      // console.log(data);

      return data.total;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export { getTransactionsPreMonthForChart, getTotalSum };
