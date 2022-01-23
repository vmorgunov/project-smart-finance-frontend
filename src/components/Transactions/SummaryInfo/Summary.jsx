import * as React from 'react';
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

const priceRow = (qty, unit) => {
  return qty * unit;
};

const createRow = (desc, qty, unit) => {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
};

const rows = [
  createRow('Ноябрь', 15000.47),
  createRow('Декабрь', 15000.52),
  createRow('Январь', 15000.23),
  createRow('Февраль', 15000.47),
  createRow('Март', 15000.23),
  createRow('Апрель', 15000.23),
];

const SpanningTable = () => {
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
          {rows.map(row => (
            <TableRow key={row.desc}>
              <NewTabCell>
                <TableText>{row.desc}</TableText>
                <TableText>{row.qty}</TableText>
              </NewTabCell>
            </TableRow>
          ))}
        </TableBody>
      </NewTable>
    </NewTableContainer>
  );
};

export default SpanningTable;
