import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import delSrc from '../../../../images/delete.svg';
import {
  List,
  Item,
  DescrDateWrrap,
  DescrWrrap,
  DateWrrap,
  CategoryWrrap,
  SumWrrap,
  ImgDelWrrap,
  ImgDel,
} from './ListBody.styled';
import {
  getTransactionsList,
  getTransactionsType,
} from 'redux/transactions/costIncomeSelector';

const ListBody = ({ handelToggleModal }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  let transactions = useSelector(getTransactionsList);
  transactions = transactions ? transactions : [];
  const transactionType = useSelector(getTransactionsType);
  //регулируем высоту для мобильной версии
  const maxCountRow =
    Math.trunc(
      (document.documentElement.clientHeight -
        (transactionType !== 'all' ? 584 : 390)) /
        50,
    ) - 1;
  const minCountRow = isMobile ? (maxCountRow <= 4 ? 4 : maxCountRow) : 8;

  const emptyRowTable = () => {
    let trans = transactions;
    if (transactions.length < minCountRow) {
      const arr = Array(minCountRow);
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
  return (
    <List matches={matches} type={transactionType}>
      {emptyRowTable()?.map(transaction => (
        <Item key={v4()} matches={matches}>
          {transaction?.type && (
            <>
              <DescrDateWrrap matches={matches}>
                <DescrWrrap matches={matches}>
                  {transaction.description}
                </DescrWrrap>
                <DateWrrap matches={matches}>{transaction.date}</DateWrrap>
              </DescrDateWrrap>
              <CategoryWrrap matches={matches}>
                {transaction.category}
              </CategoryWrrap>
              <SumWrrap
                matches={matches}
                colorTextSum={transaction.type === 'costs' ? 'red' : 'green'}
              >
                {transaction?.type === 'costs'
                  ? `-${transaction.sum} грн`
                  : `${transaction.sum} грн`}
              </SumWrrap>
              <ImgDelWrrap matches={matches}>
                <ImgDel
                  src={delSrc}
                  onClick={() => handelToggleModal(transaction)}
                ></ImgDel>
              </ImgDelWrrap>
            </>
          )}
        </Item>
      ))}
    </List>
  );
};

export default ListBody;
