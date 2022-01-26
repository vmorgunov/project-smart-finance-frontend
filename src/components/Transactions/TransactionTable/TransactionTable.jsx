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
import { getLoading } from '../../../redux/transactions/costIncomeSelector';
import { useDispatch, useSelector } from 'react-redux';
import { removeTransaction } from '../../../redux/transactions/costIncomeOperations';
import { getUserToken } from '../../../redux/selectors/tokenSelector';
import LoaderComponent from '../../../common/Loader';
import { getAllTransaction } from '../../../redux/transactions/transactionSelectors';
import pushBalance from '../../../redux/transactions/transactionOperations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalOut } from '../..';
import { useState } from 'react';

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
  {
    Header: '',
    accessor: 'type',
    param: { width: '0px', align: 'right' },
  },
  { Header: '', accessor: 'icon', param: { width: '124px', align: 'center' } },
];

const TransactionTable = ({ type, transactions }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  const balance = useSelector(getAllTransaction);
  const userToken = useSelector(getUserToken);
  const [isToggleDel, setIsToggleDel] = useState(false);
  const [transactionForDel, setTransactionForDel] = useState();
  const dispatch = useDispatch();

  const handelToggleModal = transaction => {
    setIsToggleDel(!isToggleDel);
    setTransactionForDel(transaction);
  };
  const handelYesDel = transaction => {
    setIsToggleDel(!isToggleDel);
    handleDelete(transactionForDel);
  };

  const handleDelete = transaction => {
    const idTransaction = transaction._id;
    const sum = transaction.sum;
    dispatch(removeTransaction({ idTransaction, userToken }));

    const defaultValue = type === 'costs' ? balance + sum : balance - sum;
    if (defaultValue < 0) {
      toast.warn(`Ваш баланс не может быть меньше 0 !!!`, { autoClose: 1500 });
      return;
    }
    dispatch(pushBalance({ defaultValue, userToken }));
  };

  transactions = transactions ? transactions : [];

  const isLoading = useSelector(getLoading);
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
      {isToggleDel && (
        <ModalOut
          onClose={handelToggleModal}
          onAgree={handelYesDel}
          title={'Вы уверены ?'}
        />
      )}
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
      {isLoading && (
        <LoaderComponent height={50} width={400} padding={'30px 0 '} />
      )}
      {!isMobile && !isLoading && (
        <SimpleBar style={{ maxHeight: 345 }}>
          <TableBody matches={matches}>
            <Tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <Tr key={v4()} {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      console.log(cell.column.id);
                      return (
                        <Td
                          key={v4()}
                          {...cell.getCellProps}
                          param={cell.column.param}
                          //меняем цвет суммы
                          colorTextSum={
                            cell.column.id === 'sum'
                              ? row.values.type === 'costs'
                                ? 'red'
                                : 'green'
                              : ''
                          }
                        >
                          {/* вставляем картинку удалить и меняем сумму расходов и доходов /-123 грн/ 125 грн */}
                          {console.log(cell.column.id)}
                          {cell.column.id !== 'type' &&
                            (cell.column.id === 'icon' &&
                            Object.keys(cell.row.original).length ? (
                              <ImgDelWrrap>
                                <ImgDel
                                  src={delSrc}
                                  alt="Удалить"
                                  onClick={() =>
                                    handelToggleModal(cell.row.original)
                                  }
                                />
                              </ImgDelWrrap>
                            ) : cell.column.id === 'sum' &&
                              Object.keys(cell.row.original).length ? (
                              row.values.type === 'costs' ? (
                                `-${cell.row.values.sum} грн`
                              ) : (
                                `${cell.row.values.sum} грн`
                              )
                            ) : (
                              cell.render('Cell')
                            ))}
                        </Td>
                        // const s = false ? (true ? true : false) : true;
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </TableBody>
        </SimpleBar>
      )}
    </>
  );
};
export default TransactionTable;
