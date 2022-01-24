import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { cx } from '@emotion/css';

import 'react-tabs/style/react-tabs.css';

import { tab, tabSelected, tabList, tabPanel } from './ExpenseIncome.styled';

import { useMediaQuery } from 'react-responsive';

import TransactioInfo from '../TransactioInfo';
import Form from '../Form';
import BtnBackspace from '../BtnBackspace';
import TransactionMobile from '../TransactionMobile';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  getTransactionsByMonth,
  removeTransaction,
} from '../../../redux/transactions/costIncomeOperations';
import { getUserToken } from '../../../redux/selectors/tokenSelector';
import {
  getTransactions,
  getTransactionsList,
} from '../../../redux/transactions/costIncomeSelector';
import { getAllTransaction } from '../../../redux/transactions/transactionSelectors';

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
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [transactionType, setTransactionType] = useState('costs');
  const [transaction, setTransaction] = useState([]);

  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();

  const [calendar, setCalendar] = useState(new Date());
  const [idTransaction, setIdTransaction] = useState(null);
  const balance = useSelector(getAllTransaction);

  let month = calendar.getUTCMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  const year = calendar.getFullYear();
  // const t = Number('20.01.2022'.split('.')[0]);
  // console.log(t);
  // console.log(transaction.sort((b, a) => Number(a.day) - Number(b.day)));
  useEffect(() => {
    if (!!userToken) {
      dispatch(
        getTransactionsByMonth({ year, month, transactionType, userToken }),
      ).then(data => {
        const sort = data.payload.sort((b, a) => Number(a.day) - Number(b.day));
        setTransaction(sort);
      });
    }
  }, [year, dispatch, month, userToken, transactionType, calendar, balance]);

  const getDate = newdata => {
    setCalendar(newdata);
  };

  const handleDelete = (transaction, type) => {
    setIdTransaction(transaction._id);
    dispatch(removeTransaction({ idTransaction, userToken }));

    // const sum = transaction.sum
    // const newBalance = balance - sum;
    // dispatch(incrementByAmount());
  };
  return (
    <>
      {!isMobile && (
        <Tabs>
          <TabList className={cx(tabList)}>
            <Tab
              onClick={() => setTransactionType('costs')}
              selectedClassName={cx(tabSelected)}
              className={cx(tab)}
            >
              Расход
            </Tab>
            <Tab
              onClick={() => setTransactionType('income')}
              selectedClassName={cx(tabSelected)}
              className={cx(tab)}
            >
              Доход
            </Tab>
          </TabList>

          <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
            <Form dateFinder={getDate} type={transactionType} />
            <TransactioInfo
              type={transactionType}
              transactions={transaction} //
              handleDelete={handleDelete}
            />
          </TabPanel>
          <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
            <Form dateFinder={getDate} type={transactionType} />
            <TransactioInfo
              type={transactionType}
              transactions={transaction} //
            />
          </TabPanel>
        </Tabs>
      )}
      {isMobile && (
        <TransactionMobile
          dateFinder={getDate}
          type={transactionType}
          transactions={transaction} //
          handleDelete={handleDelete}
        ></TransactionMobile>
      )}
    </>
  );
};

export default ExpenseIncome;
