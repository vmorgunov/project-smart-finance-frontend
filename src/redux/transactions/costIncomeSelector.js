import { createSelector } from '@reduxjs/toolkit';

export const getTransactions = state => state.transactions.items;
export const getError = state => state.transactions.error;
export const getTransactionsSums = state => state.transactions.sums;
export const getLoading = state => state.transactions.isLoading;

export const getTransactionsList = createSelector(
  [getTransactions],
  transactions => {
    const transactionsSort = [...transactions];
    const result = transactionsSort.sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );
    console.log(result);
    return result;
  },
);
