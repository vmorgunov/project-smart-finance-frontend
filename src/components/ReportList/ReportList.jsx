import React from 'react';
import { useSelector } from 'react-redux';
import { getIsFulfilled } from '../../redux/transactonsForChart/chartSelectors';

import {List, Item, ItemData, ItemImg} from './ReportList.styled'
import repAlcohol from '../../images/rep-alcohol.svg'
// import salary from '../../images/salary.svg'

const ReportList = ({ data }) => {
    const isFulfilled = useSelector(getIsFulfilled);
    console.log(data);

    return (
        <List>
            {!isFulfilled ? ( <Item>-L-O-A-D-I-N-G-</Item> )
                :
                (data ? (
                    // <Item>Транзакций нет</Item>
                    <Item>
                    <ItemData>00.00</ItemData>
                    <ItemImg width="58" height="58" src={repAlcohol} alt="repAlcohol" />
                    <ItemData>Транзакций нет</ItemData>
                </Item>
                )
                :
                (data.map(item =>
                (<Item key={item.id}>
                    <ItemData>{item.sum}</ItemData>
                    <ItemImg width="58" height="58" src={repAlcohol} alt="repAlcohol" />
                    <ItemData>{item.category}</ItemData>
                </Item>)))
                )
            }
        </List>
    )
}

export default ReportList;