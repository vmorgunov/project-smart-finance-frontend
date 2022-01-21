import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useMediaQuery } from 'react-responsive';
import './style.css';

import "react-datepicker/dist/react-datepicker.css";

import Input from '../Input';
import Button from '../Button';
import SelectCategry from '../SelectCategory'

import { ConfirmationWrrapDiv, DateSend, DateWrrap, DivCalc, FormStyle, InputWrrapDiv, TransactionValueWrrap } from "./Form.styled";

import srcCalc from '../../../images/calculator.svg';
import srcCalendar from '../../../images/calendar.svg';

const Form = () => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isDesctop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isMobile, isTablet, isDesctop };

    const [cost, setCost] = useState('')
    const [startDate, setStartDate] = useState(new Date());

    // console.log(startDate.getDate(), startDate.getMonth(), startDate.getFullYear());
    return (
        <FormStyle  matches={matches}>
            <InputWrrapDiv matches={matches}>
                {!matches.isMobile &&
                    <DateWrrap matches={matches}>
                        <img
                            src={srcCalendar}
                            alt="Календарь"
                            width={20}
                            height={20}
                        />
                        <DateSend>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd.MM.yyyy"
                                maxDate={new Date()} />
                        </DateSend>
                    </DateWrrap>
                }
                <Input
                    placeholder="Описание товара"
                    border={{top: 2, right: isMobile ? 2 : 0, bottom: isMobile ? 0 : 2, left: 2}}
                    borderRadius={{ topLeft: 16, topRight: isMobile ? 16 : 0, bottomRight: 0, bottomLeft: 0 }}
                    widthInput={isDesctop ? '287' : isTablet ? '192' : isMobile && '282'}
                    paddingInput={'0px 17px 0px 20px'}
                    borderColor={isMobile && 'var(--bg-text-color)'}
                />
                <SelectCategry />
                <TransactionValueWrrap matches={matches} >
                    <Input
                        type="text"
                        placeholder="00.00 UAH"
                        border={{top: 2, right: isMobile ? 2 : 0, bottom: 2, left: 2}}
                        borderRadius={{ topLeft: isMobile ? 22 : 0, topRight: 0, bottomRight: 0, bottomLeft: isMobile ? 22 : 0 }}
                        borderColor={isMobile && 'var(--bg-text-color)'}
                        widthInput={isMobile ? 125 : 75}
                        paddingInput={isMobile ? '12px 17px 12px 3px' : '2px'}
                        textAlignInput='right'

                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                    <DivCalc  matches={matches}>
                        <img
                            src={srcCalc}
                            alt="Калькулятор"
                            width={20}
                            height={20}
                        />
                    </DivCalc> 
                </TransactionValueWrrap>
            </InputWrrapDiv>
            <ConfirmationWrrapDiv matches={matches}>
                <Button
                    text={'Ввод'}
                    marginButton={'0 15px 0 0'}
                />
                <Button
                    text={'Очистить'}
                    marginButton={'0'}
                    />
            </ConfirmationWrrapDiv>
        </FormStyle>
        );
};

export default Form;