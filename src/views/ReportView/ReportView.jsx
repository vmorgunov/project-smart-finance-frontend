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

  useEffect(() => {
    if (!!userToken) {
      const transactionsData = dispatch(
        getTransactionsPreMonthForChart({ year, month, switchData, userToken }),
      );
      setData(transactionsData);
    }
  }, [year, dispatch, month, userToken, switchData]);

  //   const switchMonthLeft = () => {
  //     setMonth(newDate.add(-1, 'month').format('MM'));
  //     if (month === '01') {
  //       setYear(newDate.add('year').format('YYYY'));
  //     }
  //   };

  //   const switchMonthRight = () => {
  //     setMonth(newDate.add(1, 'month').format('MM'));
  //     if (month === '12') {
  //       setYear(newDate.add('year').format('YYYY'));
  //     }
  //   };

  //   const clickOnSwitch = () => {
  //     if (switchData === 'costs') {
  //       setSwitchData('income');
  //     }
  //     if (switchData !== 'costs') {
  //       setSwitchData('costs');
  //     }
  //   };

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
