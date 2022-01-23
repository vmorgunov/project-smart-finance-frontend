import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  ReportButton,
  MonthPicker,
  Reports,
  ReportStatistic,
} from '../../components';
// import {Balance} from '../../components'
import { getCategoriesByCosts, getCategoriesByIncome } from '../../api/reportApi';
import { Chart } from '../../components/Chart';
import { getUserToken } from '../../redux/selectors/tokenSelector';
import { getTransactionsPreMonthForChart } from '../../redux/transactonsForChart/transactionOperations';

import 'moment/locale/ru';
import moment from 'moment';

import {
  ReportContainer,
  ReportHeader,
} from './ReportView.styled';

const ReportView = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  const [newDate, setNewDate] = useState(moment(new Date()));
  const [month, setMonth] = useState(moment(new Date()).format('MM'));
  const [year, setYear] = useState(moment(new Date()).format('YYYY'));

  const [type, setType] = useState('costs');
  const [data, setData] = useState([]);
  
  const [categoriesCosts, setCategoriesCosts] = useState([]);
  const [categoriesIncome, setCategoriesIncome] = useState([]);

  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();

  // useState for Chart 
  const [chartsCategoryId, setChartsCategoryId] = useState('');

// MISHA Reports
  useEffect(() => {
    if (!!userToken) {
      const transactionsData = dispatch(
        getTransactionsPreMonthForChart({ year, month, type, userToken }),
      );
      setData(transactionsData);
    }
  }, [year, dispatch, month, userToken, type]);

// TANYA ReportStatistic
  useEffect(() => {
    if (!!userToken) {
      async function getCategories() {
      const costs = await getCategoriesByCosts(month, year);
      setCategoriesCosts(costs);
      const income = await getCategoriesByIncome(month, year);
      setCategoriesIncome(income);
      }
        getCategories();
    }
  }, [year, dispatch, month, userToken]);

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
  const onClickGetChart = (id) => {
    console.log(id);
    setChartsCategoryId(id);
  }

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
        <ReportStatistic>
          costs={categoriesCosts}
          income={categoriesIncome}
        </ReportStatistic>
        <Reports
          data={data}
          type={type}
          onClickSwitchType={onClickSwitchType}
          onClickGetChart={onClickGetChart}
        />
        <Chart />
      </ReportContainer>
    </>
  );
};

export default ReportView;
