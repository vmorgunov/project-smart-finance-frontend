import { createSelector } from '@reduxjs/toolkit';

export const getTransactions = state => state.transactions.items;
export const getError = state => state.transactions.error;
export const getTransactionsSums = state => state.transactions.sums;
export const getLoading = state => state.transactions.isLoading;

export const getTransactionsList = createSelector(
  [getTransactions],
  transactions => {
    const transactionsSort = [...transactions];
    return transactionsSort.sort((a, b) => new Date(b.date) - new Date(a.date));
  },
);