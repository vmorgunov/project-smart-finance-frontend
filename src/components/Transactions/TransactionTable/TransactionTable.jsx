import { useMediaQuery } from 'react-responsive';
import SimpleBar from 'simplebar-react';
import 'simplebar/src/simplebar.css';

import {
  getLoading,
  getTransactionsType,
} from '../../../redux/transactions/costIncomeSelector';
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
import ListHeader from './ListHeader';
import ListBody from './ListBody';
import { TransactionWrrap } from './TransactionTable.styled';

const TransactionTable = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  const balance = useSelector(getAllTransaction);
  const userToken = useSelector(getUserToken);
  const isLoading = useSelector(getLoading);
  const transactionType = useSelector(getTransactionsType);

  const [isToggleDel, setIsToggleDel] = useState(false);
  const [transactionForDel, setTransactionForDel] = useState();

  const dispatch = useDispatch();

  const handelToggleModal = transaction => {
    setIsToggleDel(!isToggleDel);
    setTransactionForDel(transaction);
  };
  const handelYesDel = () => {
    setIsToggleDel(!isToggleDel);
    handleDelete(transactionForDel);
  };

  const handleDelete = transaction => {
    const idTransaction = transaction._id;
    const type = transaction.type;
    const sum = transaction.sum;
    dispatch(removeTransaction({ idTransaction, userToken }));

    const defaultValue = type === 'costs' ? balance + sum : balance - sum;
    if (defaultValue < 0) {
      toast.warn(`Ваш баланс не может быть меньше 0 !!!`, { autoClose: 1500 });
      return;
    }
    dispatch(pushBalance({ defaultValue, userToken }));
  };
  //регулируем высоту для мобильной версии
  const heightCosts =
    document.documentElement.clientHeight - 629 < 250
      ? 200
      : document.documentElement.clientHeight - 629;
  const heightAll =
    document.documentElement.clientHeight - 420 < 250
      ? 200
      : document.documentElement.clientHeight - 420;

  return (
    <>
      {isToggleDel && (
        <ModalOut
          onClose={handelToggleModal}
          onAgree={handelYesDel}
          title={'Вы уверены ?'}
        />
      )}
      {!isMobile && <ListHeader />}
      <TransactionWrrap matches={matches}>
        {isLoading ? (
          <LoaderComponent height={50} width={400} padding={'30px 0 '} />
        ) : (
          <SimpleBar
            style={{
              maxHeight: isMobile
                ? transactionType !== 'all'
                  ? heightCosts
                  : heightAll
                : 345,
            }}
          >
            <ListBody handelToggleModal={handelToggleModal} />
          </SimpleBar>
        )}
      </TransactionWrrap>
    </>
  );
};
export default TransactionTable;
