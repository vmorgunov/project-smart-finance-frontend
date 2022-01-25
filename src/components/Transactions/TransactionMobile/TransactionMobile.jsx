import SimpleBar from 'simplebar-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import ButtonMobile from '../ButtonCostsIncomeMobile';
import Form from '../Form';
import {
  BalanseWrrap,
  BtnWrap,
  CategoryWrrap,
  DateWrrap,
  DescrDateWrrap,
  DescrWrrap,
  ImgDel,
  ImgDelWrrap,
  Item,
  List,
  SumWrrap,
  TransactionWrrap,
} from './TransactionMobile.styled';
import delSrc from '../../../images/delete.svg';
import { getLoading } from '../../../redux/transactions/costIncomeSelector';
import { getAllTransaction } from '../../../redux/transactions/transactionSelectors';
import { getUserToken } from '../../../redux/selectors/tokenSelector';
import { removeTransaction } from '../../../redux/transactions/costIncomeOperations';
import LoaderComponent from '../../../common/Loader';
import pushBalance from '../../../redux/transactions/transactionOperations';
import { ModalOut } from '../..';

const TransactionMobile = ({
  type,
  transactions,
  dateFinder,
  handelToggleType,
}) => {
  const balance = useSelector(getAllTransaction);
  const userToken = useSelector(getUserToken);
  const [isToggleDel, setIsToggleDel] = useState(false);
  const [transactionForDel, setTransactionForDel] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

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
      toast.warn(`Ваш баланс не может быть меньше 0 !!!`);
      return;
    }
    dispatch(pushBalance({ defaultValue, userToken }));
  };
  return (
    <>
      {isToggleDel && (
        <ModalOut
          onClose={handelToggleModal}
          onAgree={handelYesDel}
          title={'Вы уверены ?'}
        />
      )}
      {/* <BalanseWrrap><Balance></Balance></BalanseWrrap> */}
      <Form dateFinder={dateFinder} type={type} />
      <TransactionWrrap>
        {isLoading && (
          <LoaderComponent height={40} width={400} padding={'30px 0 '} />
        )}
        <SimpleBar style={{ maxHeight: 225 }}>
          <List>
            {transactions?.map(trans => (
              <Item key={trans._id}>
                <DescrDateWrrap>
                  <DescrWrrap>{trans.description}</DescrWrrap>
                  <DateWrrap>{trans.date}</DateWrrap>
                </DescrDateWrrap>
                <CategoryWrrap>{trans.category}</CategoryWrrap>
                <SumWrrap
                  colorTextSum={trans.type === 'costs' ? 'red' : 'green'}
                >
                  {trans.type === 'costs'
                    ? `-${trans.sum} грн`
                    : `${trans.sum} грн`}
                </SumWrrap>
                <ImgDelWrrap>
                  <ImgDel
                    src={delSrc}
                    onClick={() => handelToggleModal(trans)}
                  ></ImgDel>
                </ImgDelWrrap>
              </Item>
            ))}
          </List>
        </SimpleBar>
      </TransactionWrrap>
      <BtnWrap>
        <ButtonMobile
          text="расход"
          marginButton="0 2px 0 0"
          widthButton="159"
          heightButton="53"
          borderRadius="0"
          backgroundColor="var(--bg-color)"
          handelToggleType={handelToggleType}
          lableForHandelToggleType={'costs'}
        />
        <ButtonMobile
          marginButton="0 3px 0 0"
          widthButton="58"
          heightButton="53"
          borderRadius="0"
          backgroundColor="var(--bg-color)"
          handelToggleType={handelToggleType}
          lableForHandelToggleType={'all'}
        />
        <ButtonMobile
          text="доход"
          marginButton="0"
          widthButton="159"
          heightButton="53"
          borderRadius="0"
          backgroundColor="var(--bg-color)"
          handelToggleType={handelToggleType}
          lableForHandelToggleType={'income'} //не меняется ти остается один
        />
      </BtnWrap>
    </>
  );
};

export default TransactionMobile;
