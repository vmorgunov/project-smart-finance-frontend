import { React } from 'react';

import ReportList from '../ReportList/ReportList';

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';
import { ArrowIcon, ButtonSwitch, Switch, SwitchData } from '../MonthPicker/MonthPicker.styled';
import { ReportsContainer } from './Reports.styled'

export const Reports = ({ allCategories, switchData, clickOnSwitch }) => {

    const costsType = allCategories.filter(item => item.type === "costs");
    const incomeType = allCategories.filter(item=> item.type === "income")

    return (
        <ReportsContainer>
            <Switch>
                <ButtonSwitch type="button" onClick={clickOnSwitch}>
                    <ArrowIcon src={prevArrowIcon} alt="prevArrowIcon" />
                </ButtonSwitch>
                
                {switchData === 'costs' ?
                    (<SwitchData>Расходы</SwitchData>)
                    :
                    (<SwitchData>Доходы</SwitchData>)
                }
                <ButtonSwitch type="button" onClick={clickOnSwitch}>
                    <ArrowIcon src={nextArrowIcon} alt="nextArrowIcon" />
                </ButtonSwitch>
            </Switch>

            {switchData === 'costs' ?
                (<ReportList category={switchData} transactions={ costsType }/>)
                :
                (<ReportList category={switchData} transactions={ incomeType }/>)
            }
            
        </ReportsContainer>
    )
}

