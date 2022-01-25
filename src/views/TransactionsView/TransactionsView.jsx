import { useMediaQuery } from 'react-responsive';
import Container from '../../components/Transactions/Container';
import ExpenseIncome from '../../components/Transactions/ExpenseIncome';
import { Balance } from '../../components/Balance';

import cabagesImg from '../../images/kapustaTransactionDesktop.svg';
import twoCabages from '../../images/twoKapusta.svg';

import { Background, BgImg, TransactionWrrap } from './TransactionsView.styled';
import { useState } from 'react';

const TransactionsView = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesktop };
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
      {isDesktop && <BgImg matches={matches} src={cabagesImg} alt='Много капусты' />}
      {isTablet && <BgImg matches={matches} src={twoCabages} alt='Две капусты' />}
    </Container>
  );
};

export default TransactionsView;
