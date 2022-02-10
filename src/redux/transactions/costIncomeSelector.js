import { createSelector } from '@reduxjs/toolkit';

export const getError = state => state.transactions.error;
export const getLoading = state => state.transactions.isLoading;

export const getTransactionsType = state => state.transactions.type;
export const getTransactions = state => state.transactions.transactions;

export const getTransactionsList = createSelector(
  [getTransactions],
  transactions => {
    const transactionsSort = [...transactions];
    const result = transactionsSort.sort(
      (b, a) =>
        Number(a.day) - Number(b.day) ||
        Date.parse(a.createdAt) - Date.parse(b.createdAt),
    );
    return result;
  },
);
