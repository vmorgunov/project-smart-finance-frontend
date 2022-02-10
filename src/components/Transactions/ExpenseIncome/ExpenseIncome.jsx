import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { cx } from '@emotion/css';

import 'react-tabs/style/react-tabs.css';

import { tab, tabSelected, tabList, tabPanel } from './ExpenseIncome.styled';

import TransactioInfo from '../TransactioInfo';
import Form from '../Form';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTransactionsByMonth } from '../../../redux/transactions/costIncomeOperations';
import { getUserToken } from '../../../redux/selectors/tokenSelector';
import { getAllTransaction } from '../../../redux/transactions/transactionSelectors';
import {
  fetchSummaryCosts,
  fetchSummaryIncome,
} from '../../../redux/transactions/transactionOperations';
import {
  getTransactionType,
  getTransaction,
} from '../../../redux/transactions/costIncomeSlice';
import { getTransactionsType } from '../../../redux/transactions/costIncomeSelector';
import { tabs } from './ExpenseIncome.styled';

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
  const [calendar, setCalendar] = useState(new Date());

  const transactionType = useSelector(getTransactionsType);
  const balance = useSelector(getAllTransaction);
  const userToken = useSelector(getUserToken);

  const dispatch = useDispatch();

  let month = calendar.getUTCMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  const year = calendar.getFullYear();

  useEffect(() => {
    if (!!userToken) {
      dispatch(
        getTransactionsByMonth({ year, month, transactionType, userToken }),
      ).then(({ payload }) => {
        dispatch(getTransaction(payload));
      });
    }
  }, [dispatch, month, transactionType, userToken, year, balance]);

  const getDate = newdata => {
    setCalendar(newdata);
  };
  transactionType === 'costs'
    ? dispatch(fetchSummaryCosts({ userToken }))
    : dispatch(fetchSummaryIncome({ userToken }));

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
          <Form dateFinder={getDate} />
          <TransactioInfo />
        </TabPanel>
        <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
          <Form dateFinder={getDate} />
          <TransactioInfo />
        </TabPanel>
        <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
          <Form dateFinder={getDate} />
          <TransactioInfo />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ExpenseIncome;
