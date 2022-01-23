import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BalanceWrapper,
  BalanceText,
  BalanceInput,
  BalanceConfirm,
  BalanceNavLink,
  ImgReport,
  LabelWrapper,
  InputText,
  BalanceSet,
} from './Balance.styled';
import report from '../../images/report.svg';
import { getAllTransaction } from '../../redux/transactions/transactionSelectors';
import { getUserToken } from '../../redux/selectors/tokenSelector';
import ModalWelcome from '../ModalWelcome/ModalWelcome';
import pushBalance from '../../redux/transactions/transactionOperations';
import { fetchBalance } from '../../redux/transactions/transactionOperations';
export const Balance = () => {
  const [value, setValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const dispatch = useDispatch();
  const balance = useSelector(getAllTransaction);
  const userToken = useSelector(getUserToken);
  const onClick = e => {
    e.preventDefault();
    dispatch(pushBalance({ defaultValue, userToken }));
  };

  useEffect(() => {
    dispatch(fetchBalance({ userToken }));
  }, [dispatch, userToken]);

  useEffect(() => {
    setValue(balance);
  }, [balance]);

  const handleInputChange = event => {
    setDefaultValue(event.target.value);
  };

  return (
    <>
      {balance === 0 ? <ModalWelcome IsOpen={true} /> : !(<ModalWelcome />)}
      <BalanceWrapper>
        <BalanceText>Баланс:</BalanceText>
        <LabelWrapper>
          {balance > 0 ? (
            <>
              <BalanceInput
                type="number"
                readOnly
                value={value}
                onChange={handleInputChange}
                maxLength="20"
                autoComplete="off"
              />
              <InputText>UAH</InputText>
            </>
          ) : (
            <>
              <BalanceInput
                type="number"
                value={defaultValue}
                onChange={handleInputChange}
                placeholder="00.00"
                maxLength="20"
                autoComplete="off"
              />
              <InputText>UAH</InputText>
            </>
          )}
          {balance > 0 ? (
            <BalanceSet disabled="disabled">Подтвердить</BalanceSet>
          ) : (
            <BalanceConfirm onClick={onClick} type="submit">
              Подтвердить
            </BalanceConfirm>
          )}
        </LabelWrapper>
        <BalanceNavLink to="/report">
          Перейти к отчетам
          <ImgReport src={report} alt="Отчеты" />
        </BalanceNavLink>
      </BalanceWrapper>
    </>
  );
};

// export default Balance;
