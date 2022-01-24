import { useMediaQuery } from 'react-responsive';
import Container from '../../components/Transactions/Container';
import ExpenseIncome from '../../components/Transactions/ExpenseIncome';
import { Balance } from '../../components/Balance';

import cabagesIcon from '../../images/twoKapusta.svg';
import cabagesBg from '../../images/kapustaTransactionDesktop.svg';

import { Background, TransactionWrrap, BgImg } from './TransactionsView.styled';

const TransactionsView = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesktop };
  return (
    <Container>
      <Background matches={matches} />
      {/* {!isMobile && <Balance />} */}
      <Balance />
      <TransactionWrrap matches={matches}>
        <ExpenseIncome />
      </TransactionWrrap>
      {isDesktop && <BgImg matches={matches} src={cabagesBg} alt='Много капусты' />}
      {isTablet && <BgImg matches={matches} src={cabagesIcon} alt='Две капусты' />}
    </Container>
  );
};

export default TransactionsView;

// import Media from 'react-media';

// import {BtnBackspace} from '../../components/';
// import { Container } from '../../components';
// import { ExpenseIncome } from '../../components';

// import { Background, TransactionWrrap } from './TransactionsView.styled';
// //import {media} from './media'
// // const media = {
// //           small: "(max-width: 767px)",
// //           medium: "(min-width: 768px) and (max-width: 1279px)",
// //           large: "(min-width: 1280px)"
// //         }

// const TransactionsView = ({matches}) => {
//     return (<>
//                 <Background  matches={matches}/>
//                 {matches.small && <BtnBackspace />}
//                 <TransactionWrrap>

//                     {/* BALANSE COMPONENT */}

//                     <ExpenseIncome/>

//         </TransactionWrrap>
//         </>
//     );
// };

// export default TransactionsView;
