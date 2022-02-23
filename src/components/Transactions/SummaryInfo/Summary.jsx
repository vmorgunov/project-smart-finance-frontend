import React from 'react';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';
import { getSummary } from '../../../redux/transactions/transactionSelectors';
import TableBody from '@mui/material/TableBody';
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
import { ThTabCell } from './Summary.styled';

const SpanningTable = () => {
  const summary = useSelector(getSummary);

  const listMonthSummary = Object.keys(summary);

  return (
    <>
      <NewTableContainer component={Paper}>
        <NewTable sx={{ minWidth: 220 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <ThTabCell align="center" colSpan={3}>
                <SummaryText>Сводка</SummaryText>
              </ThTabCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {listMonthSummary.map(month => (
                <NewTabCell key={v4()}>
                  {summary[month] ? (
                    <>
                      <TableText>{month}</TableText>
                      <TableText>{`${summary[
                        month
                      ].toLocaleString()}.00 UAH`}</TableText>
                    </>
                  ) : (
                    ''
                  )}
                </NewTabCell>
              ))}
            </TableRow>
          </TableBody>
        </NewTable>
      </NewTableContainer>
    </>
  );
};

export default SpanningTable;
