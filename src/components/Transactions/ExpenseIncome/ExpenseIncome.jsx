import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { cx } from '@emotion/css'

import 'react-tabs/style/react-tabs.css';

import {tab, tabSelected, tabList, tabPanel} from './ExpenseIncome.styled'

import { useMediaQuery } from 'react-responsive';

import TransactioInfo from '../TransactioInfo';
import Form from '../Form';
import BtnBackspace from '../BtnBackspace';
import TransactionMobile from '../TransactionMobile';

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
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isDesctop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isMobile, isTablet, isDesctop }

    return (
    <>
            {!isMobile &&
                <Tabs>
                    <TabList className={cx(tabList)}>
                        <Tab selectedClassName={cx(tabSelected)} className={cx(tab)}>Расход</Tab>
                        <Tab selectedClassName={cx(tabSelected)} className={cx(tab)} >Доход</Tab>
                    </TabList>
                
                    <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
                        <Form />
                        <TransactioInfo
                        type={true}
                    />
                    </TabPanel>
                    <TabPanel className={cx(tabPanel, 'react-tabs__tab-panel')}>
                        <Form />
                        <TransactioInfo
                        type={false}
                    />
                    </TabPanel>
                </Tabs>
            }
            {isMobile && 
                <TransactionMobile />
            }
        </>
    );
};

export default ExpenseIncome;