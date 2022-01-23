import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';

export const NewTableContainer = styled.div`
  border-radius: 25px;
`;

export const NewTable = styled(Table)`
  background-color: var(--bg-color);
  border-radius: 25px;
`;

export const NewTabCell = styled(TableCell)`
  display: flex;
  padding: 12px 20px;
  border: 1.5px solid #ffffff;
  align-items: center;
  justify-content: space-between;
  box-shadow: none;
  color: var(--text-color-3);
`;

export const TableText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
`;

export const SummaryText = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-color);
`;
