// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import // fetchSummaryCosts,
// fetchSummaryIncome,
'../../../redux/transactions/transactionOperations';
import // getIncome,
// getCosts,
'../../../redux/transactions/transactionSelectors';
// import { getUserToken } from '../../../redux/selectors/tokenSelector';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  NewTable,
  NewTabCell,
  TableText,
  SummaryText,
  NewTableContainer,
} from './Summary.styled.jsx';

const SpanningTable = () => {
  // const dispatch = useDispatch();
  // const income = useSelector(getIncome);
  // const costs = useSelector(getCosts);
  // const arrIncome = Object.values(income);
  // const userToken = useSelector(getUserToken);
  // useEffect(() => {
  //   dispatch(fetchSummaryCosts({ userToken }));
  // }, [dispatch, userToken]);

  // useEffect(() => {
  //   dispatch(fetchSummaryIncome({ userToken }));
  // }, [dispatch, userToken]);

  return (
    <NewTableContainer component={Paper}>
      <NewTable sx={{ minWidth: 220 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              <SummaryText>Сводка</SummaryText>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <NewTabCell>
              <TableText>Январь</TableText>
              <TableText>1 563.45 UAH</TableText>
            </NewTabCell>
            <NewTabCell>
              <TableText>Февраль</TableText>
              <TableText>15 045.37 UAH</TableText>
            </NewTabCell>
            <NewTabCell>
              <TableText>Март</TableText>
              <TableText>9 665.77 UAH</TableText>
            </NewTabCell>
            <NewTabCell>
              <TableText>Апрель</TableText>
              <TableText>7 450.96 UAH</TableText>
            </NewTabCell>
            <NewTabCell>
              <TableText>Май</TableText>
              <TableText>85 620.20 UAH</TableText>
            </NewTabCell>
            <NewTabCell>
              <TableText>Июнь</TableText>
              <TableText>56 200.63 UAH</TableText>
            </NewTabCell>
          </TableRow>
        </TableBody>
      </NewTable>
    </NewTableContainer>
  );
};

export default SpanningTable;
