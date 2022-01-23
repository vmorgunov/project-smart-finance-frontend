import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { cx } from '@emotion/css'

import 'react-tabs/style/react-tabs.css';

import {tab, tabSelected, tabList, tabPanel} from './ExpenseIncome.styled'

import { useMediaQuery } from 'react-responsive';

import TransactioInfo from '../TransactioInfo';
import Form from '../Form';
import BtnBackspace from '../BtnBackspace';
import { getAllTransaction } from '../../../redux/transactions/transactionSelectors';
import TransactionMobile from '../TransactionMobile';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getLoading, getTransactionsList, isLoadingValue } from '../../../redux/transactions/costIncomeSelector';
import { getTransactionsByMonth, removeTransaction } from '../../../redux/transactions/costIncomeOperations';
import delSrc from '../../../images/delete.svg'
import { incrementByAmount } from '../../../redux/transactions/transactionSlice';
import { getUserToken } from '../../../redux/selectors/tokenSelector';
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

export const DATA = [
    { day: '18', month: '01', date: '18.01.2022', description: '1Metroffffffffffffffffffffff', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'1' },
    { day: '18', month: '01', date: '18.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'2'  },
    { day: '18', month: '01', date: '18.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'3'  },
    { day: '18', month: '01', date: '18.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'4'  },
    { day: '18', month: '01', date: '18.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'5'  },
    { day: '18', month: '01', date: '18.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'6'  },
    { day: '18', month: '01', date: '18.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'7'  },
    { day: '18', month: '01', date: '18.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'8'  },
    { day: '18', month: '01', date: '18.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'9'  },
    { day: '10', month: '01', date: '10.01.2022', description: '1Metro', category: 'Cost', sum: '180', icon: delSrc, type:false, ID:'10'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'11'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'12'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'13'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'14'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'15'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'16'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'17'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'18'  },
    { day: '10', month: '01', date: '10.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'19'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'20'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'21'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'22'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'23'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'24'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'25'  },
    { day: '18', month: '01', date: '18.01.2022', description: 'Metro', category: 'Cost', sum: '180', icon: delSrc, type:true, ID:'26'  },
]
const ExpenseIncome = () => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isDesctop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isMobile, isTablet, isDesctop };

    const [transactionType, setTransactionType] = useState('costs');//costs
    const [transaction, setTransaction] = useState([]);
    const isLoading = useSelector(getLoading);

    const userToken = useSelector(getUserToken);
    const dispatch = useDispatch();

    const [calendar, setCalendar] = useState(new Date());
    const [idTransaction, setIdTransaction] = useState(null);

    let month = calendar.getUTCMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    const year = calendar.getFullYear();

    useEffect(() => {
        if (!!userToken) {
            console.log('ExpenseIncome1',transactionType);
            dispatch(
                getTransactionsByMonth({ year, month, transactionType, userToken }),
            ).then(d => 
                {setTransaction(d.payload.data.transactions)}
            );
            console.log('ExpenseIncome1',transactionType);
        }
    }, [year, dispatch, month, userToken, transactionType]);

    const getDate = newdata => {
        setCalendar(newdata);
    };

    const handleDelete = (transaction, type) => {
        setIdTransaction(transaction.id);
        // const sum = transaction.sum
        // const newBalance = balance - sum;
        // dispatch(incrementByAmount());
    };
    return (
    <>
            {!isMobile && transaction.length && !isLoading &&
                <Tabs>
                    <TabList className={cx(tabList)}>
                        <Tab onClick={() => setTransactionType('costs')}
                            selectedClassName={cx(tabSelected)} className={cx(tab)}>Расход</Tab>
                        <Tab onClick={() => setTransactionType('income')}
                            selectedClassName={cx(tabSelected)} className={cx(tab)} >Доход</Tab>
                    </TabList>
                
                    <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
                        <Form
                            dateFinder={getDate}
                            type={transactionType}
                        />
                        <TransactioInfo
                            type={transactionType}
                            transactions={transaction}//
                            handleDelete={handleDelete}
                    />
                    </TabPanel>
                    <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
                        <Form
                            dateFinder={getDate}
                            type={transactionType}
                        />
                        <TransactioInfo 
                            type={transactionType}
                            transactions={transaction}//
                            handleDelete={handleDelete}
                    />
                    </TabPanel>
                </Tabs>
            }
            {isMobile && 
                <TransactionMobile
                    dateFinder={getDate}
                    type={transactionType}
                    transactions={transaction}//
                    handleDelete={handleDelete}
                >
                </TransactionMobile>
            }
        </>
    );
};

export default ExpenseIncome;