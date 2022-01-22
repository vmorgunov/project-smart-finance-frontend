import React from "react";
import { useMediaQuery } from "react-responsive";
import {
    Title,
    TitleMobile,
    Switch ,
    ButtonSwitch,
    SwitchData,
    ArrowIcon,
    Container
} from './MonthPicker.styled'

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';

import 'moment/locale/ru';
import moment from 'moment';

export const MonthPicker = ({ switchMonthLeft, switchMonthRight, dateMonth, dateYears }) => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 })
    
    return (
        <>
    
            <Container>
                {isMobile && <TitleMobile>Текущий период:</TitleMobile>}
                {isTabletOrDesktop && <Title>Текущий период:</Title>}
                <Switch>
                    <ButtonSwitch type="button" onClick={switchMonthLeft}>
                        <ArrowIcon src={prevArrowIcon} alt="prevArrowIcon" />
                    </ButtonSwitch>
                    
                    <SwitchData>{moment(dateMonth).format("MMMM")} {dateYears}</SwitchData>
                    
                    <ButtonSwitch type="button" onClick={switchMonthRight}>
                        <ArrowIcon src={nextArrowIcon} alt="nextArrowIcon" />
                    </ButtonSwitch>
                </Switch>
            </Container>
        </>
    );
}

