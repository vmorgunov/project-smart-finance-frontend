import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  ReportButton,
  MonthPicker,
  Reports,
  ReportStatistic,
} from '../../components';

import { Chart } from '../../components/Chart';
import { getUserToken } from '../../redux/selectors/tokenSelector';
import { getTransactionsPreMonthForChart } from '../../redux/transactonsForChart/transactionOperations';

import 'moment/locale/ru';
import moment from 'moment';

import { ReportContainer, ReportHeader } from './ReportView.styled';

const ReportView = () => {
  const [newDate, setNewDate] = useState(moment(new Date()));
  const [month, setMonth] = useState(moment(new Date()).format('MM'));
  const [year, setYear] = useState(moment(new Date()).format('YYYY'));

  const [type, setType] = useState('costs');
  const [data, setData] = useState([]);

  const [categoriesCosts, setCategoriesCosts] = useState(0);
  const [categoriesIncome, setCategoriesIncome] = useState(0);

  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();

  // useState for Chart
  const [chartsCategoryId, setChartsCategoryId] = useState('');

  // MISHA Reports
  useEffect(() => {
    if (!!userToken) {
      dispatch(
        getTransactionsPreMonthForChart({ year, month, type, userToken }),
      ).then(response => {
        setData(response.payload.data);
      });
      getTotalSumOfTransactions({ year, month, type, userToken });
    }
  }, [year, dispatch, month, userToken, type]);

  const getTotalSumOfTransactions = ({ year, month, userToken }) => {
    dispatch(
      getTransactionsPreMonthForChart({
        year,
        month,
        type: 'costs',
        userToken,
      }),
    ).then(response => {
      const data = response.payload.data;
      const totalSum = data.reduce((acc, item) => {
        return acc + item.sum;
      }, 0);
      setCategoriesCosts(totalSum);
    });
    dispatch(
      getTransactionsPreMonthForChart({
        year,
        month,
        type: 'income',
        userToken,
      }),
    ).then(response => {
      const data = response.payload.data;
      const totalSum = data.reduce((acc, item) => {
        return acc + item.sum;
      }, 0);
      setCategoriesIncome(totalSum);
    });
  };

  const switchMonthLeft = () => {
    setMonth(newDate.add(-1, 'month').format('MM'));
    if (month === '01') {
      setYear(newDate.add('year').format('YYYY'));
    }
  };

  const switchMonthRight = () => {
    setMonth(newDate.add(1, 'month').format('MM'));
    if (month === '12') {
      setYear(newDate.add('year').format('YYYY'));
    }
  };

  const onClickSwitchType = () => {
    if (type === 'costs') {
      setType('income');
    }
    if (type !== 'costs') {
      setType('costs');
    }
  };
  // useState for Chart
  const onClickGetChart = id => {
    console.log(id);
    setChartsCategoryId(id);
  };

  return (
    <>
      <ReportContainer>
        <ReportHeader>
          <ReportButton />
          {/* <Balance/> */}
          <MonthPicker
            switchMonthLeft={switchMonthLeft}
            switchMonthRight={switchMonthRight}
            dateMonth={month}
            dateYears={year}
          />
        </ReportHeader>
        {/* {isTabletOrDesktop && <ModalOut />} */}
        <ReportStatistic
          categoriesCosts={categoriesCosts}
          categoriesIncome={categoriesIncome}
        />
        <Reports
          data={data}
          type={type}
          onClickSwitchType={onClickSwitchType}
          onClickGetChart={onClickGetChart}
        />
        <Chart
          transactions={data}
          chartsCategoryId={chartsCategoryId}
        />
      </ReportContainer>
    </>
  );
};

export default ReportView;
