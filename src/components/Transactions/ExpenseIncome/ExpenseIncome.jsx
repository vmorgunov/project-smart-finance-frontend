import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { cx } from '@emotion/css';

import 'react-tabs/style/react-tabs.css';

import { tab, tabSelected, tabList, tabPanel } from './ExpenseIncome.styled';

import TransactioInfo from '../TransactioInfo';
import Form from '../Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTransactionsByMonth } from '../../../redux/transactions/costIncomeOperations';
import { getUserToken } from '../../../redux/selectors/tokenSelector';
import { getAllTransaction } from '../../../redux/transactions/transactionSelectors';
import { fetchSummary } from '../../../redux/transactions/transactionOperations';
import {
  getTransactionType,
  getTransaction,
} from '../../../redux/transactions/costIncomeSlice';
import {
  getTransactionsType,
  getTransactionsDate,
} from '../../../redux/transactions/costIncomeSelector';
import { tabs } from './ExpenseIncome.styled';
import moment from 'moment';

const DEFAULT_CLASS = 'react-tabs__tab';
const DEFAULT_SELECTED_CLASS = `${DEFAULT_CLASS}--selected`;

const CustomTab = ({ className, selectedClassName, ...props }) => (
  <Tab
    className={`${DEFAULT_CLASS}, ${className}`}
    selectedClassName={`${DEFAULT_SELECTED_CLASS}, ${selectedClassName}`}
    {...props}
  />
);

CustomTab.tabsRole = 'Tab';

const ExpenseIncome = () => {
  const transactionType = useSelector(getTransactionsType);
  const balance = useSelector(getAllTransaction);
  const userToken = useSelector(getUserToken);
  const transactionDate = useSelector(getTransactionsDate);

  const dispatch = useDispatch();
  const year = moment(transactionDate).format('YYYY');
  const month = moment(transactionDate).format('MM');

  useEffect(() => {
    if (!!userToken) {
      dispatch(
        getTransactionsByMonth({ year, month, transactionType, userToken }),
      ).then(({ payload }) => {
        dispatch(getTransaction(payload));
      });
    }
  }, [dispatch, month, transactionType, userToken, year, balance]);

  dispatch(fetchSummary({ userToken, transactionType }));

  return (
    <>
      <Tabs
        className={cx(tabs)}
        defaultIndex={
          transactionType === 'costs'
            ? 0
            : transactionType === 'income'
            ? 1
            : transactionType === 'all'
            ? 2
            : 0
        }
      >
        <TabList className={cx(tabList)}>
          <Tab
            onClick={() => dispatch(getTransactionType('costs'))}
            selectedClassName={cx(tabSelected)}
            className={cx(tab)}
          >
            Расход
          </Tab>
          <Tab
            onClick={() => dispatch(getTransactionType('income'))}
            selectedClassName={cx(tabSelected)}
            className={cx(tab)}
          >
            Доход
          </Tab>
          <Tab
            onClick={() => dispatch(getTransactionType('all'))}
            selectedClassName={cx(tabSelected)}
            className={cx(tab)}
          >
            Общее
          </Tab>
        </TabList>
        <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
          <Form />
          <TransactioInfo />
        </TabPanel>
        <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
          <Form />
          <TransactioInfo />
        </TabPanel>
        <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
          <Form />
          <TransactioInfo />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ExpenseIncome;
