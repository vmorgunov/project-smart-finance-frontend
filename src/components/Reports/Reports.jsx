import { React } from 'react';

import ReportList from '../ReportList/ReportList';

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';
import { ArrowIcon, ButtonSwitch, Switch, SwitchData } from '../MonthPicker/MonthPicker.styled';
import { ReportsContainer } from './Reports.styled'

export const Reports = ({ switchData, clickOnSwitch }) => {

    return (
        <ReportsContainer>
            <Switch>
                <ButtonSwitch type="button" onClick={clickOnSwitch}>
                    <ArrowIcon src={prevArrowIcon} alt="prevArrowIcon" />
                </ButtonSwitch>
                
                <SwitchData>{switchData}</SwitchData>
                
                <ButtonSwitch type="button" onClick={clickOnSwitch}>
                    <ArrowIcon src={nextArrowIcon} alt="nextArrowIcon" />
                </ButtonSwitch>
            </Switch>

            <ReportList category={switchData} />
            
        </ReportsContainer>
    )
}

