import axios from 'axios';
// https://project-smart-finance.herokuapp.com/api/v1/transactions/:year/:month/:type/data

axios.defaults.baseURL = 'https://project-smart-finance.herokuapp.com/api/v1/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function getAllTransactionsDATA({ year, month, type, userToken }) {
  const { data } = await axios.get(
    `/transactions/:year=${year}/:month=${month}/:type=${type}/data`,
  );
  token.set(userToken);
  return data;
}

// Доход и расход
// export async function getCategoriesByCosts(YYYY, MM) {
//   const { data } = await axios.get(
//     `/transactions/:year=${YYYY}/:month=${MM}/costs`,
//   );
//   return data.total;
// }

// export async function getCategoriesByIncome(YYYY, MM) {
//   const { data } = await axios.get(
//     `/transactions/:year=${YYYY}/:month=${MM}/income`,
//   );
//   return data.total;
// }
