import { useMediaQuery } from 'react-responsive';

import Container from '../../components/Transactions/Container';
import ExpenseIncome from '../../components/Transactions/ExpenseIncome';
import { Balance } from '../../components/Balance';

import { Background, TransactionWrrap } from './TransactionsView.styled';
import { useState } from 'react';

const TransactionsView = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };
  //для отображения формы при выборе всех трансакций(Background меняется)
  const [changeBackground, setChangeBackground] = useState('');
  const changeBackgroundForFormModal = type => setChangeBackground(type);

  return (
    <Container>
      <Background matches={matches} changeBackground={changeBackground} />
      {/* {!isMobile && <Balance />} */}
      <Balance />
      <TransactionWrrap matches={matches}>
        <ExpenseIncome
          changeBackgroundForFormModal={changeBackgroundForFormModal}
        />
      </TransactionWrrap>
    </Container>
  );
};

export default TransactionsView;
