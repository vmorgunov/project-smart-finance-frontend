import { useTable } from 'react-table';
import { useMediaQuery } from 'react-responsive';
import { v4 } from 'uuid';
import SimpleBar from 'simplebar-react';
import 'simplebar/src/simplebar.css';

import {
  TableHeader,
  TableBody,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ImgDel,
  ImgDelWrrap,
} from './TransactionTable.styled';
import delSrc from '../../../images/delete.svg';

export const COLUMS = [
  {
    Header: 'Дата',
    accessor: 'date',
    param: { width: '104px', align: 'left' },
  },
  {
    Header: 'Описание',
    accessor: 'description',
    param: { width: '190px', align: 'left' },
  },
  {
    Header: 'Категория',
    accessor: 'category',
    param: { width: '150px', align: 'center' },
  },
  {
    Header: 'Сумма',
    accessor: 'sum',
    param: { width: '120px', align: 'right' },
  },
  { Header: '', accessor: 'icon', param: { width: '124px', align: 'center' } },
];
export const DATA = [
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
  {
    date: '18.01.2022',
    description: 'Metro',
    category: 'Cost',
    sum: '180',
    icon: delSrc,
  },
];

const TransactionTable = ({ type, transactions, handleDelete }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  console.log('TransactionTable', transactions, type);

  const matches = { isMobile, isTablet, isDesctop };
  //с юсмемо нужно разобратся что то не коректно перелистывает TAB
  const columns = COLUMS; //useMemo(() => COLUMS, [])
  //если строки не заполняют всю таблицу, добавляем их
  const emptyRowTable = () => {
    let trans = transactions;
    if (transactions.length < 8) {
      const arr = Array(8);
      for (let i = 0; i < arr.length; i++) {
        if (i + 1 > transactions.length) {
          trans = [...trans, {}];
        }
      }
    } else {
      return transactions;
    }
    return trans;
  };
  const data = emptyRowTable(); //useMemo(() => transactions, [])
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      {console.log('TransactionTable', transactions, type)}
      <TableHeader {...getTableProps()} matches={matches}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr key={v4()} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th
                  key={v4()}
                  {...column.getHeaderProps()}
                  param={column.param}
                >
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
      </TableHeader>
      <SimpleBar style={{ maxHeight: 345 }}>
        <TableBody matches={matches}>
          <Tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <Tr key={v4()} {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    // {console.log(cell.row.original)}
                    return (
                      <Td
                        key={v4()}
                        {...cell.getCellProps}
                        param={cell.column.param}
                      >
                        {cell.column.id === 'icon' &&
                        Object.keys(cell.row.original).length ? (
                          <ImgDelWrrap>
                            <ImgDel
                              src={delSrc}
                              alt="Удалить"
                              onClick={() =>
                                handleDelete(cell.row.original, type)
                              }
                            />
                          </ImgDelWrrap>
                        ) : (
                          cell.render('Cell')
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </TableBody>
      </SimpleBar>
    </>
  );
};
export default TransactionTable;
