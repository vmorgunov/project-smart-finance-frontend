import {React, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ReportButton, MonthPicker, Reports, ReportStatistic } from '../../components';
// import {Balance} from '../../components'

import { Chart } from '../../components/Chart'

import {getAllTransactionsDATA} from '../../api/reportApi';

import 'moment/locale/ru';
import moment from 'moment';

import {
    ReportContainer,
    ReportHeader,
    ReportGraph
} from './ReportView.styled'

export const ReportView = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
    
    const [newDate, setNewDate] = useState(moment(new Date()));
    const [dateMonth, setDateMonth] = useState(moment(new Date()).format('MM'));
    const [dateYears, setDateYears] = useState(moment(new Date()).format('YYYY'));
    const [switchData, setSwitchData] = useState('costs');
    const [categoriesCosts, setCategoriesCosts] = useState([]);


    useEffect(() => {
        async function getAllTransactions() {
            const transactionsDATA = await getAllTransactionsDATA( dateYears, dateMonth, switchData);
            setCategoriesCosts(transactionsDATA);
            console.log(transactionsDATA.data);
        }
        getAllTransactions();
    }, [switchData, dateMonth, dateYears]);

    const switchMonthLeft = () => {
        setDateMonth(newDate.add(-1, 'month').format('MM'));
        if (dateMonth === '01') {
            setDateYears(newDate.add('year').format('YYYY'));
        }
    };

    const switchMonthRight = () => {
        setDateMonth(newDate.add(1, 'month').format('MM'));
        if (dateMonth === '12') {
            setDateYears(newDate.add('year').format('YYYY'));
        }
    };

    const clickOnSwitch = () => {
        if (switchData === 'costs') {
            setSwitchData('income');
        }
        if (switchData !== 'costs') {
            setSwitchData('costs');
        }
    };
    
    return (
        <>
            <ReportContainer> 
                {isMobile &&
                <>
                    <ReportButton /> 
                    
                    <MonthPicker
                        switchMonthLeft={switchMonthLeft}
                        switchMonthRight={switchMonthRight}
                        dateMonth={dateMonth}
                        dateYears={dateYears}
                    />
                </>
                }
                {isTabletOrDesktop &&
                    <ReportHeader>

                        <ReportButton />

                        {/* <Balance/> */}

                        <MonthPicker
                            switchMonthLeft={switchMonthLeft}
                            switchMonthRight={switchMonthRight}
                            dateMonth={dateMonth}
                            dateYears={dateYears}
                        />

                    </ReportHeader>
                }
                      {/* {isTabletOrDesktop && <ModalOut />}
                      {isMobile && <ModalOutMobile/>} */}
                <ReportStatistic>
                </ReportStatistic>

                <Reports
                    switchData={switchData}
                    clickOnSwitch={clickOnSwitch}
                />
                
                <ReportGraph>29. График</ReportGraph>
                <Chart />
            </ReportContainer>
        </>
    );
}