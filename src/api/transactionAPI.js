import axios from 'axios';

axios.defaults.baseURL = 'https://project-smart-finance.herokuapp.com/api/v1/';


export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function getTransactionsByMonth({ year, month, transactionType, userToken }) {
    const { data } = await axios.get(`/transactions/${year}/${month}/${transactionType}`);
    token.set(userToken);
    return data;
}

export async function addTransaction(type, newTransaction) {
    const { data } = await axios.post(`/transactions/${type}`, newTransaction);
    return data;
}

export async function removeTransaction(transactionId) {
    const { data } = await axios.delete(`/transactions/${transactionId}`);
    return data.result;
}