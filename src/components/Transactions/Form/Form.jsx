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
registerLocale('ru', ru); // register it with the name you want

const Form = ({ dateFinder, type }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  const dispatch = useDispatch();
  //все поля формы
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  useEffect(() => {
    dateFinder(selectedDate);
  }, [selectedDate, dateFinder]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'description':
        setDescriptionDirty(value ? false : true);
        setDescription(value);
        break;
      case 'sum':
        setSumDirty(value ? false : true);
        setIsToggleColorCurrency(value ? true : false);
        const valueNum = value ? parseFloat(value) : '';
        setSum(valueNum);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const day = String(selectedDate?.getDate());
    const year = String(selectedDate?.getFullYear());
    let month = selectedDate.getUTCMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }

    const newTransaction = {
      day,
      category,
      description,
      month,
      year,
      sum,
    };

    try {
      resetForm();
      if (category && description && selectedDate && sum && !!userToken) {
        const transactionType = type;
        const defaultValue = type === 'costs' ? balance - sum : balance + sum;
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

        toast.success(
          `Ваш ${transactionType === 'costs' ? 'расход' : 'доход'} внесен!`,
          { autoClose: 1500 },
        );
      } else {
        //error
        if (!category) {
          setCategoryDirty(true);
        }
        if (!selectedDate) {
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
  };

  return (
    <FormStyle matches={matches} autoComplete="off" onSubmit={handleSubmit}>
      <InputWrrapDiv matches={matches}>
        <DateWrrap type={type} matches={matches}>
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
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd.MM.yyyy"
                width="400"
              />
            </WrrapFieldForm>
          </DateSend>
        </DateWrrap>

        {type !== 'all' && (
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
                onChange={caterory => setCategory(caterory.label)}
                type={type}
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
                  type="number"
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
      {type !== 'all' && (
        <>
          <ConfirmationWrrapDiv matches={matches}>
            <Button type="submit" text={'Ввод'} marginButton={'0 15px 0 0'} />
            <Button text={'Очистить'} marginButton={'0'} type="reset" />
          </ConfirmationWrrapDiv>
        </>
      )}
    </FormStyle>
  );
};

export default Form;
