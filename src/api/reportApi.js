import axios from 'axios';
// https://project-smart-finance.herokuapp.com/api/v1/transactions/:year/:month/:type/data

axios.defaults.baseURL = 'https://project-smart-finance.herokuapp.com/api/v1/';

export async function getAllTransactionsDATA({ YYYY, MM, type }) {
  const data = await axios.get(
    `/transactions/:year=${YYYY}/:month=${MM}/:type=${type}/data`,
  );
  return data;
}
