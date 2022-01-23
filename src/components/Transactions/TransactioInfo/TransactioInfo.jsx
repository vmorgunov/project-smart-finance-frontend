import { useMediaQuery } from 'react-responsive';

import TransactionTable from '../TransactionTable';
import {
  Summary,
  TransactioDetailsWrrap,
  TransactioInfoWrrap,
} from './TransactioInfo.styled';

import SpanningTable from '../SummaryInfo/Summary';

const TransactioInfo = ({ type, transactions, handleDelete }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  return (
    <TransactioInfoWrrap matches={matches}>
      <TransactioDetailsWrrap matches={matches}>
        <TransactionTable
          type={type}
          transactions={transactions}
          handleDelete={handleDelete}
        />
      </TransactioDetailsWrrap>
      <Summary matches={matches}>
        <SpanningTable
          type={type}
          transactions={transactions}
          handleDelete={handleDelete}
        />
      </Summary>
    </TransactioInfoWrrap>
  );
};
export default TransactioInfo;
