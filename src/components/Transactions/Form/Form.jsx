import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

import 'react-datepicker/dist/react-datepicker.css';

import Input from '../Input';
import Button from '../Button';
import SelectCategry from '../SelectCategory';
import { getAllTransaction } from '../../../redux/transactions/transactionSelectors';
import { incrementByAmount } from '../../../redux/transactions/transactionSlice';

import {
  ConfirmationWrrapDiv,
  DateSend,
  DateWrrap,
  DivCalc,
  FormStyle,
  InputWrrapDiv,
  TransactionValueWrrap,
} from './Form.styled';

import srcCalc from '../../../images/calculator.svg';
import srcCalendar from '../../../images/calendar.svg';
import {
  addTransaction,
  getTransactionsByMonth,
} from '../../../redux/transactions/costIncomeOperations';
import { getUserToken } from '../../../redux/selectors/tokenSelector';
import pushBalance from '../../../redux/transactions/transactionOperations';

//const labelError = [{message: }]

const Form = ({ dateFinder, type }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const matches = { isMobile, isTablet, isDesctop };

  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
  const [errMesage, seterrMesage] = useState('');
  const userToken = useSelector(getUserToken);

  const balance = useSelector(getAllTransaction);

  useEffect(() => {
    dateFinder(selectedDate);
  }, [selectedDate, dateFinder]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'description':
        //console.log(name, value);
        setDescription(value);
        break;
      case 'sum':
        const valueNum = parseFloat(value);
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

    // const labelError = {};

    try {
      resetForm();
      if (category && description && selectedDate && sum && !!userToken) {
        const transactionType = type;
        const defaultValue = type === 'costs' ? balance - sum : balance + sum;
        if (defaultValue < 0) {
          toast.warn(`Ваш баланс не может быть меньше 0 !!!`);
          return;
        }
        dispatch(
          addTransaction({ newTransaction, transactionType, userToken }),
        );

        dispatch(pushBalance({ defaultValue, userToken }));

        toast.success(
          `Ваш ${transactionType === 'costs' ? 'расход' : 'доход'} внесен!`,
        );
      } else {
        // error console.log(category && description && selectedDate && sum);
        if (!category) {
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
        {!matches.isMobile && (
          <DateWrrap matches={matches}>
            <img src={srcCalendar} alt="Календарь" width={20} height={20} />
            <DateSend>
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd.MM.yyyy"
                maxDate={new Date()}
              />
            </DateSend>
          </DateWrrap>
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
          widthInput={isDesctop ? '287' : isTablet ? '192' : isMobile && '282'}
          paddingInput={'0px 17px 0px 20px'}
          borderColor={isMobile && 'var(--bg-text-color)'}
        />
        <SelectCategry
          placeholder="Категория товара"
          name="category"
          selected={category}
          onChange={caterory => setCategory(caterory.label)}
          type={type}
        />
        <TransactionValueWrrap matches={matches}>
          <Input
            value={sum}
            onChange={handleChange}
            type="number"
            name="sum"
            placeholder="00.00 UAH"
            border={{ top: 2, right: isMobile ? 2 : 0, bottom: 2, left: 2 }}
            borderRadius={{
              topLeft: isMobile ? 22 : 0,
              topRight: 0,
              bottomRight: 0,
              bottomLeft: isMobile ? 22 : 0,
            }}
            borderColor={isMobile && 'var(--bg-text-color)'}
            widthInput={isMobile ? 125 : 75}
            paddingInput={isMobile ? '12px 17px 12px 3px' : '2px'}
            textAlignInput="right"
          />
          <DivCalc matches={matches}>
            <img src={srcCalc} alt="Калькулятор" width={20} height={20} />
          </DivCalc>
        </TransactionValueWrrap>
      </InputWrrapDiv>
      <ConfirmationWrrapDiv matches={matches}>
        <Button type="submit" text={'Ввод'} marginButton={'0 15px 0 0'} />
        <Button text={'Очистить'} marginButton={'0'} type="reset" />
      </ConfirmationWrrapDiv>
    </FormStyle>
  );
};

export default Form;
