import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BalanceWrapper,
  BalanceInput,
  BalanceConfirm,
  LabelWrapper,
  InputText,
  BalanceSet,
} from './Balance.styled';

// import { BalanceInputText } from 'views/ReportView/ReportView.styled';

import { getAllTransaction } from 'redux/transactions/transactionSelectors';
import { getUserToken } from 'redux/selectors/tokenSelector';
import { ModalWelcome } from '..';
import pushBalance from 'redux/transactions/transactionOperations';
import { fetchBalance } from 'redux/transactions/transactionOperations';
import { CommonText } from 'common';

export const Balance = ({ typeView }) => {
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

  console.log(value, balance);

  const handleInputChange = event => {
    setDefaultValue(event.target.value);
  };

  return (
    <>
      {!balance && <ModalWelcome IsOpen={true} />}
      <BalanceWrapper>
        <CommonText color="var(--text-color-2)">Баланс:</CommonText>
        <LabelWrapper>
          {balance > 0 ? (
            <>
              <BalanceInput
                typeView={typeView}
                type="number"
                readOnly
                value={balance}
                onChange={handleInputChange}
                maxLength="20"
                autoComplete="off"
              />
              {/* {!typeView && <InputText>UAH</InputText>}
              {typeView && <BalanceInputText>UAH</BalanceInputText>} */}
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
              {!typeView && <InputText>UAH</InputText>}
            </>
          )}
          {balance > 0
            ? !typeView && (
                <BalanceSet disabled="disabled">Подтвердить</BalanceSet>
              )
            : !typeView && (
                <BalanceConfirm onClick={onClick} type="submit">
                  Подтвердить
                </BalanceConfirm>
              )}
        </LabelWrapper>
      </BalanceWrapper>
    </>
  );
};
