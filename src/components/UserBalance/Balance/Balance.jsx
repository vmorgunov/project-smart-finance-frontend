import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BalanceWrapper,
  BalanceInput,
  BalanceConfirm,
  LabelWrapper,
  BalanceText,
} from './Balance.styled';

import { getAllTransaction } from 'redux/transactions/transactionSelectors';
import { getUserToken } from 'redux/selectors/tokenSelector';
import pushBalance from 'redux/transactions/transactionOperations';
import { fetchBalance } from 'redux/transactions/transactionOperations';
import { CommonText } from 'common';
import { ModalWelcome } from '..';
import { ModalOut } from '../../ModalOut/ModalOut';

export const Balance = ({ typeView }) => {
  const [value, setValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const balance = useSelector(getAllTransaction);
  const userToken = useSelector(getUserToken);

  useEffect(() => {
    dispatch(fetchBalance({ userToken }));
  }, [dispatch, userToken]);

  useEffect(() => {
    setValue(
      balance > 0 ? balance.toLocaleString('ru').concat(' UAH') : '00.00 UAH',
    );
  }, [balance]);

  const handleInputChange = event => {
    setDefaultValue(event.target.value);
  };

  const modalMassage = `Ваш баланс равен ${defaultValue} UAH?`;

  return (
    <>
      {!balance && <ModalWelcome IsOpen={true} />}
      <BalanceWrapper typeView={typeView}>
        <BalanceText>Баланс:</BalanceText>
        <LabelWrapper>
          <BalanceInput
            typeView={typeView}
            type="number"
            value={defaultValue}
            onChange={handleInputChange}
            placeholder={value}
            maxLength="20"
            autoComplete="off"
          />
          {typeView !== 'report' && (
            <BalanceConfirm
              onClick={() => {
                if (defaultValue.length > 0) {
                  setIsModalOpen(true);
                }
              }}
              type="submit"
            >
              <CommonText color="var(--text-color-2)">Подтвердить</CommonText>
            </BalanceConfirm>
          )}
        </LabelWrapper>
      </BalanceWrapper>

      {isModalOpen && (
        <ModalOut
          onClose={() => {
            setIsModalOpen(false);
            setDefaultValue('');
          }}
          onAgree={() => {
            dispatch(pushBalance({ defaultValue, userToken }));
            setDefaultValue('');
            setIsModalOpen(false);
          }}
          title={modalMassage}
        />
      )}
    </>
  );
};
