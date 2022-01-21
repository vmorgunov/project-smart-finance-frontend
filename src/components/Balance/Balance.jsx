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
} from './Balance.styled';
import report from '../../images/report.svg';
import { getAllTransaction } from '../../redux/transactions/transactionSelectors';
import { incrementByAmount } from '../../redux/transactions/transactionSlice';
import ModalWelcome from '../ModalWelcome/ModalWelcome';

export const Balance = () => {
  const [value, setValue] = useState('00.00');
  const [defaultValue, setDefaultValue] = useState('00.00');
  const dispatch = useDispatch();
  const balance = useSelector(getAllTransaction);
  const onClick = e => {
    e.preventDefault();
    dispatch(incrementByAmount(defaultValue));
  };

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
                type="text"
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
                type="text"
                value={defaultValue}
                onChange={handleInputChange}
                maxLength="20"
                autoComplete="off"
              />
              <InputText>UAH</InputText>
            </>
          )}
          {balance > 0 ? (
            <BalanceConfirm disabled="disabled">Подтвердить</BalanceConfirm>
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

export default Balance;
