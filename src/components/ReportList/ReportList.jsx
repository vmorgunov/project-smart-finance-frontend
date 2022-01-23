import React from 'react';
import { useSelector } from 'react-redux';
import { getIsFulfilled } from '../../redux/transactonsForChart/chartSelectors';

import {List, Item} from './ReportList.styled'
import repAlcohol from '../../images/rep-alcohol.svg'
// import salary from '../../images/salary.svg'

const ReportList = ({ data }) => {
    const isFulfilled = useSelector(getIsFulfilled);
    console.log(data);

    return (
        <List>
            {!isFulfilled ? ( <Item>-L-O-A-D-I-N-G-</Item> )
                :
                (data ? (<Item>Транзакций нет</Item>)
                :
                (data.map(item =>
                (<Item key={item.id}>
                    <p>{item.sum}</p>
                    <img width="58" height="58" src={repAlcohol} alt="repAlcohol" />
                    <p>{item.category}</p>
                </Item>)))
                )
            }
        </List>
    )
}

export default ReportList;