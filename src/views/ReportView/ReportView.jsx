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
  ReportGraph,
} from './ReportView.styled';


const ReportView = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  const [newDate, setNewDate] = useState(moment(new Date()));
  const [month, setMonth] = useState(moment(new Date()).format('MM'));
  const [year, setYear] = useState(moment(new Date()).format('YYYY'));
  const [switchData, setSwitchData] = useState('costs');
  const [allCategories, setAllCategories] = useState([]);
  const [data, setData] = useState([]);
  const [categoriesCosts, setCategoriesCosts] = useState([]);
  const [categoriesIncome, setCategoriesIncome] = useState([]);
  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!userToken) {
      const transactionsData = dispatch(
        getTransactionsPreMonthForChart({ year, month, switchData, userToken }),
      );
      setData(transactionsData);
    }
    async function getCategories() {
      const costs = await getCategoriesByCosts(month, year);
      setCategoriesCosts(costs);
      const income = await getCategoriesByIncome(month, year);
      setCategoriesIncome(income);
      }
        getCategories();
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
        {/* {isTabletOrDesktop && <ModalOut />} */}                   
        <ReportStatistic>
          costs={categoriesCosts}
          income={categoriesIncome}
        </ReportStatistic>
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
