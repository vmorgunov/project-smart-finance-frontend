import { useMediaQuery } from 'react-responsive';
import Container from 'components/Transactions/Container';
import ExpenseIncome from 'components/Transactions/ExpenseIncome';
import cabagesImg from 'images/kapustaTransactionDesktop.svg';
import twoCabages from 'images/twoKapusta.svg';

import { Background, BgImg, TransactionWrrap } from './TransactionsView.styled';
import { useSelector } from 'react-redux';
import { Summary } from 'components/Transactions/TransactioInfo/TransactioInfo.styled';
import SpanningTable from 'components/Transactions/SummaryInfo/Summary';
import { PageNav } from 'components/PageNav';

const TransactionsView = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesktop };

  const transactionType = useSelector(state => state.transactions.type);

  return (
    <Container>
      <Background matches={matches} transactionType={transactionType} />
      <PageNav typeView="main" />
      <TransactionWrrap matches={matches}>
        <ExpenseIncome />
      </TransactionWrrap>
      {isTablet && (
        <Summary matches={matches}>
          {transactionType !== 'all' && <SpanningTable />}
        </Summary>
      )}
      {isDesktop && (
        <BgImg matches={matches} src={cabagesImg} alt="Много капусты" />
      )}
      {isTablet && (
        <BgImg matches={matches} src={twoCabages} alt="Две капусты" />
      )}
    </Container>
  );
};

export default TransactionsView;
