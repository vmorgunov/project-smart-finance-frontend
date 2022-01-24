import { useMediaQuery } from 'react-responsive';

import Container from '../../components/Transactions/Container';
import ExpenseIncome from '../../components/Transactions/ExpenseIncome';
import { Balance } from '../../components/Balance';

import { Background, TransactionWrrap } from './TransactionsView.styled';

const TransactionsView = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };
  return (
    <Container>
      <Background matches={matches} />
      {/* {!isMobile && <Balance />} */}
      <Balance />
      <TransactionWrrap matches={matches}>
        <ExpenseIncome />
      </TransactionWrrap>
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
