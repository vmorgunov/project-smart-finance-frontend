import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';

export const NewTableContainer = styled.div``;

export const NewTable = styled(Table)`
  background-color: var(--bg-color);
  border-radius: 25px 25px 25px 0;
`;

export const NewTabCell = styled(TableCell)`
  display: flex;
  height: 38px;
  padding: 10px 20px;
  border: 2px solid var(--bg-text-color);
  align-items: center;
  justify-content: space-between;
  box-shadow: none;
  color: var(--text-color-3);
`;

export const ThTabCell = styled(TableCell)`
  display: flex;
  height: 38px;
  border: 2px solid var(--bg-text-color);
  align-items: center;
  justify-content: center;
  box-shadow: none;
`;

export const TableText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
`;

export const SummaryText = styled.span`
  font-weight: bold;
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-color);
`;
