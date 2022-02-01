import { React, useState } from 'react';

import {
  Title,
  Switch,
  ButtonSwitch,
  SwitchData,
  ArrowIcon,
  MonthContainer,
} from './MonthPicker.styled';

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';

import 'moment/locale/ru';
import moment from 'moment';

export const MonthPicker = ({ setMonth, setYear, month, year }) => {
  const [newDate] = useState(moment(new Date()));

  const switchMonthLeft = () => {
    setMonth(newDate.add(-1, 'month').format('MM'));
    if (month === '01') {
      setYear(newDate.add('year').format('YYYY'));
    }
  };

  const switchMonthRight = () => {
    setMonth(newDate.add(1, 'month').format('MM'));
    if (month === '12') {
      setYear(newDate.add('year').format('YYYY'));
    }
  };

  return (
    <MonthContainer>
      <Title>Текущий период:</Title>
      <Switch>
        <ButtonSwitch type="button" onClick={switchMonthLeft}>
          <ArrowIcon src={prevArrowIcon} alt="prevArrowIcon" />
        </ButtonSwitch>

        <SwitchData>
          {moment(month).format('MMMM')} {year}
        </SwitchData>

        <ButtonSwitch type="button" onClick={switchMonthRight}>
          <ArrowIcon src={nextArrowIcon} alt="nextArrowIcon" />
        </ButtonSwitch>
      </Switch>
    </MonthContainer>
  );
};
