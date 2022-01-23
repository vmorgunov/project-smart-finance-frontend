import { createAsyncThunk } from '@reduxjs/toolkit';
import * as transactionsApi from '../../api/transactionAPI';

import axios from 'axios';

axios.defaults.baseURL = 'https://project-smart-finance.herokuapp.com/api/v1';


const getTransactionsByMonth = createAsyncThunk(
  'transactions/getTransactionsByMonth',
  async ({ year, month, transactionType, userToken }, thunkAPI) => {
    const AuthStr = 'Bearer '.concat(userToken);
    try {
      const { data } = await axios.get(
        `/transactions/${year}/${month}/${transactionType}`,
        { headers: { Authorization: AuthStr } },
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async ({ newTransaction, transactionType, userToken }, thunkAPI) => {
    const AuthStr = 'Bearer '.concat(userToken);
    try {
      
      const { data } = await axios.post(`/transactions/${transactionType}`,
        {
          headers: { Authorization: AuthStr },
          body: newTransaction
        },
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const removeTransaction = createAsyncThunk(
  'transactions/removeTransaction',
  async transactionId => {
    await transactionsApi.removeTransaction(transactionId);
    return transactionId;
  },
);

export {
  getTransactionsByMonth,
  addTransaction,
  removeTransaction,
};