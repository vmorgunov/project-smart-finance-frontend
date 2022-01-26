import React from 'react';
import { useSelector } from 'react-redux';
import {
  getIncome,
  getCosts,
} from '../../../redux/transactions/transactionSelectors';
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
  const income = useSelector(getIncome);
  const costs = useSelector(getCosts);
  const monthIncome = Object.keys(income);
  const monthCosts = Object.keys(costs);
  const sumIncome = Object.values(income);
  const sumCosts = Object.values(costs);
  return (
    <>
      {costs && (
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
                  <TableText>{monthCosts[0]}</TableText>
                  <TableText>{sumCosts[0]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthCosts[1]}</TableText>
                  <TableText>{sumCosts[1]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthCosts[2]}</TableText>
                  <TableText>{sumCosts[2]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthCosts[3]}</TableText>
                  <TableText>{sumCosts[3]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthCosts[4]}</TableText>
                  <TableText>{sumCosts[4]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthCosts[5]}</TableText>
                  <TableText>{sumCosts[5]} UAH</TableText>
                </NewTabCell>
              </TableRow>
            </TableBody>
          </NewTable>
        </NewTableContainer>
      )}
      {income && (
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
                  <TableText>{monthIncome[0]}</TableText>
                  <TableText>{sumIncome[0]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthIncome[1]}</TableText>
                  <TableText>{sumIncome[1]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthIncome[2]}</TableText>
                  <TableText>{sumIncome[2]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthIncome[3]}</TableText>
                  <TableText>{sumIncome[3]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthIncome[4]}</TableText>
                  <TableText>{sumIncome[4]} UAH</TableText>
                </NewTabCell>
                <NewTabCell>
                  <TableText>{monthIncome[5]}</TableText>
                  <TableText>{sumIncome[5]} UAH</TableText>
                </NewTabCell>
              </TableRow>
            </TableBody>
          </NewTable>
        </NewTableContainer>
      )}
    </>
  );
};

export default SpanningTable;
