import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru'; // the locale you want
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

import 'react-datepicker/dist/react-datepicker.css';

import Input from '../Input';
import Button from '../Button';
import SelectCategry from '../SelectCategory';
import { getAllTransaction } from '../../../redux/transactions/transactionSelectors';

import {
  ConfirmationWrrapDiv,
  Currency,
  DateSend,
  DateWrrap,
  DivCalc,
  FormStyle,
  InputWrrapDiv,
  TransactionValueWrrap,
  WrrapErrorText,
  WrrapFieldForm,
} from './Form.styled';

import srcCalc from '../../../images/calculator.svg';
import srcCalendar from '../../../images/calendar.svg';
import { addTransaction } from '../../../redux/transactions/costIncomeOperations';
import { getUserToken } from '../../../redux/selectors/tokenSelector';
import pushBalance from '../../../redux/transactions/transactionOperations';
import {
  getTransactionsType,
  getTransactionsDate,
} from 'redux/transactions/costIncomeSelector';
import moment from 'moment';
import { setTransactionDate } from 'redux/transactions/costIncomeSlice';
registerLocale('ru', ru); // register it with the name you want

const Form = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  const dispatch = useDispatch();

  const transactionType = useSelector(getTransactionsType);
  //все поля формы
  const transactionDate = useSelector(getTransactionsDate);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
  //потеря фокуса с импута
  const [dateDirty, setDateDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [categoryDirty, setCategoryDirty] = useState(false);
  const [sumDirty, setSumDirty] = useState(false);
  //текст ошибки
  const [dateError, setDateError] = useState('Дата не может быть пустой !!!');
  const [descriptionError, setDescriptionError] = useState(
    'Описание не может быть пустым !!!',
  );
  const [categoryError, setCategoryError] = useState(
    'Нужно выбрать категорию !!!',
  );
  const [sumError, setSumError] = useState('Введите сумму !!!');
  //для валюты подсветка при фокусе
  const [isToggleColorCurrency, setIsToggleColorCurrency] = useState(false);

  const userToken = useSelector(getUserToken);
  const balance = useSelector(getAllTransaction);

  const handleChange = e => {
    let name;
    let value;
    if (e.currentTarget) {
      name = e.currentTarget.name;
      value = e.currentTarget.value;
    } else {
      setCategoryDirty(e.label ? false : true);
      setCategory(e.label);
    }
    switch (name) {
      case 'description':
        setDescriptionDirty(value ? false : true);
        setDescription(value);
        break;
      case 'sum':
        const valueNum = value !== '' ? Number(value.replace(/\s+/g, '')) : '';
        setSumDirty(valueNum || valueNum === '' ? false : true);
        setIsToggleColorCurrency(valueNum === '' ? false : true);
        valueNum || valueNum === ''
          ? setSum(valueNum.toLocaleString())
          : setSumError('Введите число!!!');
        setTimeout(function () {
          setSumDirty(false);
        }, 3000);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let day = moment(transactionDate).format('DD');
    const year = moment(transactionDate).format('YYYY');
    let month = moment(transactionDate).format('MM');

    setTimeout(function () {
      setCategoryDirty(false);
      setDescriptionDirty(false);
      setSumDirty(false);
    }, 3000);

    const newTransaction = {
      day,
      category,
      description,
      month,
      year,
      sum: Number(sum.replace(/\s+/g, '')),
    };

    try {
      if (category && description && transactionDate && sum && !!userToken) {
        const sumNumber = Number(sum.replace(/\s+/g, ''));
        const defaultValue =
          transactionType === 'costs'
            ? balance - sumNumber
            : balance + sumNumber;
        if (defaultValue < 0) {
          toast.warn(`Ваш баланс не может быть меньше 0 !!!`, {
            autoClose: 1500,
          });
          return;
        }
        dispatch(
          addTransaction({ newTransaction, transactionType, userToken }),
        );
        dispatch(pushBalance({ defaultValue, userToken }));
        resetForm();
        toast.success(
          `Ваш ${transactionType === 'costs' ? 'расход' : 'доход'} внесен!`,
          { autoClose: 1500 },
        );
      } else {
        //error
        if (!category) {
          setCategoryDirty(true);
        }
        if (!transactionDate) {
          setDateDirty(true);
        }
        if (!sum) {
          setSumDirty(true);
        }
        if (!description) {
          setDescriptionDirty(true);
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const resetForm = () => {
    setDescription('');
    setCategory('');
    setSum('');
    setIsToggleColorCurrency(false);
  };

  return (
    <FormStyle matches={matches} autoComplete="off" onSubmit={handleSubmit}>
      <InputWrrapDiv matches={matches}>
        <DateWrrap type={transactionType} matches={matches}>
          <img src={srcCalendar} alt="Календарь" width={20} height={20} />
          <DateSend>
            <WrrapFieldForm>
              {dateDirty && dateError && (
                <WrrapErrorText label="bottom" matches={matches}>
                  {dateError}
                </WrrapErrorText>
              )}
              <DatePicker
                locale="ru"
                selected={transactionDate}
                // onChange={date => setSelectedDate(date)}
                onChange={date =>
                  dispatch(setTransactionDate(Date.parse(date)))
                }
                dateFormat="dd.MM.yyyy"
                width="400"
              />
            </WrrapFieldForm>
          </DateSend>
        </DateWrrap>

        {transactionType !== 'all' && (
          <>
            <WrrapFieldForm>
              {descriptionDirty && descriptionError && (
                <WrrapErrorText label="top" matches={matches}>
                  {descriptionError}
                </WrrapErrorText>
              )}
              <Input
                value={description}
                onChange={handleChange}
                type="text"
                name="description"
                placeholder="Описание товара"
                border={{
                  top: 2,
                  right: isMobile ? 2 : 0,
                  bottom: isMobile ? 0 : 2,
                  left: 2,
                }}
                borderRadius={{
                  topLeft: 16,
                  topRight: isMobile ? 16 : 0,
                  bottomRight: 0,
                  bottomLeft: 0,
                }}
                widthInput={
                  isDesctop ? '287' : isTablet ? '192' : isMobile && '282'
                }
                paddingInput={'0px 17px 0px 20px'}
                borderColor={isMobile && 'var(--bg-text-color)'}
              />
            </WrrapFieldForm>
            <WrrapFieldForm>
              {categoryDirty && categoryError && (
                <WrrapErrorText label="bottom" matches={matches}>
                  {categoryError}
                </WrrapErrorText>
              )}
              <SelectCategry
                placeholder="Категория товара"
                name="category"
                selected={category}
                onChange={handleChange}
              />
            </WrrapFieldForm>
            <TransactionValueWrrap matches={matches}>
              <WrrapFieldForm>
                {sumDirty && sumError && (
                  <WrrapErrorText label="bottom" matches={matches}>
                    {sumError}
                  </WrrapErrorText>
                )}
                <Currency
                  isToggleColorCurrency={isToggleColorCurrency}
                  matches={matches}
                >
                  UAH
                </Currency>
                <Input
                  value={sum}
                  onChange={handleChange}
                  type="text"
                  name="sum"
                  placeholder="00.00"
                  border={{
                    top: 2,
                    right: isMobile ? 2 : 0,
                    bottom: 2,
                    left: 2,
                  }}
                  borderRadius={{
                    topLeft: isMobile ? 22 : 0,
                    topRight: 0,
                    bottomRight: 0,
                    bottomLeft: isMobile ? 22 : 0,
                  }}
                  borderColor={isMobile && 'var(--bg-text-color)'}
                  widthInput={isMobile ? 125 : 75}
                  paddingInput={
                    isMobile ? '12px 35px 12px 3px' : '2px 30px 2px 2px'
                  }
                  textAlignInput="right"
                />
              </WrrapFieldForm>
              <DivCalc matches={matches}>
                <img src={srcCalc} alt="Калькулятор" width={20} height={20} />
              </DivCalc>
            </TransactionValueWrrap>
          </>
        )}
      </InputWrrapDiv>
      {transactionType !== 'all' && (
        <>
          <ConfirmationWrrapDiv matches={matches}>
            <Button type="submit" text={'Ввод'} marginButton={'0 15px 0 0'} />
            <Button
              type="reset"
              onClick={() => resetForm()} //
              text={'Очистить'}
              marginButton={'0'}
            />
          </ConfirmationWrrapDiv>
        </>
      )}
    </FormStyle>
  );
};

export default Form;
