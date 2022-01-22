import * as balanceAPI from '../../api/reportApi';
import * as balanceActions from './transactionActions';

const setBalance = value => async dispatch => {
  dispatch(balanceActions.setTotalBalanceRequest());
  try {
    const res = await balanceAPI.setBalance(value);
    dispatch(balanceActions.setTotalBalanceSuccess(res.data.balance));
  } catch (error) {
    dispatch(balanceActions.setTotalBalanceError(error));
  }
};

const transactionsOperations = {
  setBalance,
};

export default transactionsOperations;
