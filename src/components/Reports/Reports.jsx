import { React } from 'react';

import ReportList from '../ReportList/ReportList';

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';
import {
  ArrowIcon,
  ButtonSwitch,
  Switch,
  SwitchData,
} from '../MonthPicker/MonthPicker.styled';
import { ReportsContainer } from './Reports.styled';

export const Reports = ({ data, type, onClickSwitchType, onClickGetChart }) => {
  return (
    <ReportsContainer>
      <Switch>
        <ButtonSwitch type="button" onClick={onClickSwitchType}>
          <ArrowIcon src={prevArrowIcon} alt="prevArrowIcon" />
        </ButtonSwitch>

        {type === 'costs' ? (
          <SwitchData>Расходы</SwitchData>
        ) : (
          <SwitchData>Доходы</SwitchData>
        )}
        <ButtonSwitch type="button" onClick={onClickSwitchType}>
          <ArrowIcon src={nextArrowIcon} alt="nextArrowIcon" />
        </ButtonSwitch>
      </Switch>

      <ReportList data={data} onClickGetChart={onClickGetChart} />
    </ReportsContainer>
  );
};
