import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Reports, ReportStatistic } from 'components';

import { Chart } from 'components/Chart';
import { PageNav } from 'components/PageNav';
import { getUserToken } from 'redux/selectors/tokenSelector';
import { getTransactionsPreMonthForChart } from 'redux/transactonsForChart/transactionOperations';

import 'moment/locale/ru';
import moment from 'moment';

import cabagesImg from 'images/kapustaReportDesktop.svg';
import twoCabages from 'images/twoKapustaReport.svg';

import { Background, ReportContainer, BgImg } from './ReportView.styled';

const ReportView = () => {
  const [month, setMonth] = useState(moment(new Date()).format('MM'));
  const [year, setYear] = useState(moment(new Date()).format('YYYY'));

  const [type, setType] = useState('costs');
  const [data, setData] = useState([]);

  const [categoriesCosts, setCategoriesCosts] = useState(0);
  const [categoriesIncome, setCategoriesIncome] = useState(0);

  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesktop };

  const [chartsCategoryId, setChartsCategoryId] = useState(0);

  useEffect(() => {
    if (!!userToken) {
      dispatch(
        getTransactionsPreMonthForChart({ year, month, type, userToken }),
      ).then(response => {
        setData(response.payload.data);
      });
      getTotalSumOfTransactions({ year, month, type, userToken });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setChartsCategoryId(id);
  };

  return (
    <>
      <ReportContainer matches={matches}>
        <Background matches={matches} />
        <PageNav
          typeView="report"
          setMonth={setMonth}
          setYear={setYear}
          month={month}
          year={year}
        />
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
        <Chart transactions={data} chartsCategoryId={chartsCategoryId} />

        {isDesktop && (
          <BgImg matches={matches} src={cabagesImg} alt="Много капусты" />
        )}
        {isTablet && (
          <BgImg matches={matches} src={twoCabages} alt="Две капусты" />
        )}
      </ReportContainer>
    </>
  );
};

export default ReportView;
