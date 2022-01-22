import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import {
  ReportButton,
  MonthPicker,
  Reports,
  ReportStatistic,
} from '../../components';
// import {Balance} from '../../components'

import { Chart } from '../../components/Chart';

import { getUserToken } from '../../redux/selectors/tokenSelector';
import { getTransactionsPreMonthForChart } from '../../redux/transactonsForChart/transactionOperations';

import 'moment/locale/ru';
import moment from 'moment';

import {
  ReportContainer,
  ReportHeader,
  ReportGraph,
} from './ReportView.styled';
import { useDispatch } from 'react-redux';

const transactions = [
  {
    _id: '61e878e438630fdee30eaf62',
    type: 'costs',
    category: 'спорт,хобби',
    description: 'gym',
    sum: 350,
    day: '09',
    month: '12',
    year: '2021',
    owner: '61e8754f36895bfe4aef28fc',
    createdAt: '2022-01-19T20:47:32.639Z',
    updatedAt: '2022-01-19T20:47:32.639Z',
    date: '09.12.2021',
  },
  {
    _id: '61e8791438630fdee30eaf67',
    type: 'costs',
    category: 'прочее',
    description: 'killer',
    sum: 10000,
    day: '09',
    month: '12',
    year: '2021',
    owner: '61e8754f36895bfe4aef28fc',
    createdAt: '2022-01-19T20:48:20.311Z',
    updatedAt: '2022-01-19T20:48:20.311Z',
    date: '09.12.2021',
  },
  {
    _id: '61e8794e38630fdee30eaf6c',
    type: 'costs',
    category: 'коммуналка, связь',
    description: 'water',
    sum: 500,
    day: '09',
    month: '12',
    year: '2021',
    owner: '61e8754f36895bfe4aef28fc',
    createdAt: '2022-01-19T20:49:18.125Z',
    updatedAt: '2022-01-19T20:49:18.125Z',
    date: '09.12.2021',
  },
  {
    _id: '61e8795638630fdee30eaf71',
    type: 'costs',
    category: 'коммуналка, связь',
    description: 'water',
    sum: 512,
    day: '09',
    month: '12',
    year: '2021',
    owner: '61e8754f36895bfe4aef28fc',
    createdAt: '2022-01-19T20:49:26.964Z',
    updatedAt: '2022-01-19T20:49:26.964Z',
    date: '09.12.2021',
  },
];

const ReportView = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  const [newDate, setNewDate] = useState(moment(new Date()));
  const [month, setMonth] = useState(moment(new Date()).format('MM'));
  const [year, setYear] = useState(moment(new Date()).format('YYYY'));
  const [switchData, setSwitchData] = useState('costs');
  const [allCategories, setAllCategories] = useState([]);
  const [data, setData] = useState([]);

  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();


// Расход и доход

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
                 {/* {isTabletOrDesktop && <ModalOut />} */}
                <ReportStatistic>
                    costs={categoriesCosts}
                    income={categoriesIncome}
                </ReportStatistic>

                <Reports
                    allCategories={allCategories}
                    switchData={switchData}
                    clickOnSwitch={clickOnSwitch}
                />

                <ReportGraph>29. График</ReportGraph>
                <Chart />
            </ReportContainer>
        </>
    );

  return (
    <>
      <ReportContainer>
        {isMobile && (
          <>
            <ReportButton />

            <MonthPicker
              switchMonthLeft={null}
              switchMonthRight={null}
              dateMonth={month}
              dateYears={year}
            />
          </>
        )}
        {isTabletOrDesktop && (
          <ReportHeader>
            <ReportButton />

            {/* <Balance/> */}

            <MonthPicker
              switchMonthLeft={null}
              switchMonthRight={null}
              dateMonth={month}
              dateYears={year}
            />
          </ReportHeader>
        )}
        {/* {isTabletOrDesktop && <ModalOut />}
                      {isMobile && <ModalOutMobile/>} */}
        <ReportStatistic></ReportStatistic>

        <Reports
          allCategories={allCategories}
          switchData={switchData}
          clickOnSwitch={null}
        />

        <ReportGraph>29. График</ReportGraph>
        <Chart />
      </ReportContainer>
    </>
  );
};

export default ReportView;
