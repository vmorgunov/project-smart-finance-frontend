import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';

export const NewTable = styled(Table)`
  background-color: var(--bg-color);
  border-radius: 20px;
`;

export const NewTabCell = styled(TableCell)`
  display: flex;
  padding: 12px 20px;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ffffff;
  box-shadow: none;
  color: var(--text-color-3);
`;

export const TableText = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;
