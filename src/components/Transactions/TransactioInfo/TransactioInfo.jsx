import { useMediaQuery } from 'react-responsive';

import TransactionTable from '../TransactionTable';
import {
  Summary,
  TransactioDetailsWrrap,
  TransactioInfoWrrap,
} from './TransactioInfo.styled';

import SpanningTable from '../SummaryInfo/Summary';
import { getTransactionsType } from 'redux/transactions/costIncomeSelector';
import { useSelector } from 'react-redux';

const TransactioInfo = ({ transactions, handleDelete }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  const transactionType = useSelector(getTransactionsType);

  return (
    <TransactioInfoWrrap matches={matches}>
      <TransactioDetailsWrrap
        matches={matches}
        transactionType={transactionType}
      >
        <TransactionTable />
      </TransactioDetailsWrrap>
      {isDesctop && (
        <Summary matches={matches}>
          <SpanningTable />
        </Summary>
      )}
    </TransactioInfoWrrap>
  );
};
export default TransactioInfo;
