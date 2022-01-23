import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import { getIsFulfilled } from '../../redux/transactonsForChart/chartSelectors';

import {List, Item, ItemData, ItemImg} from './ReportList.styled'
import repAlcohol from '../../images/rep-alcohol.svg'
// import salary from '../../images/salary.svg'

const ReportList = ({ data, onClickGetChart }) => {
    const isFulfilled = useSelector(getIsFulfilled);
    console.log(data);

    const [isActiveId, setIsActiveId] = useState('');

    return (
        <List>
            {!isFulfilled ? ( <Item>-L-O-A-D-I-N-G-</Item> )
                :
                (data ? (
                    // <Item>Транзакций нет</Item>
                    <Item onClick={() => {
                    onClickGetChart('Транзакций нет');
                    setIsActiveId('Транзакций нет');
                  }}>
                    <ItemData>00.00</ItemData>
                    <ItemImg width="58" height="58" src={repAlcohol} alt="repAlcohol" />
                    <ItemData>Транзакций нет</ItemData>
                </Item>
                )
                :
                (data.map(item =>
                (<Item  onClick={() => {
                    onClickGetChart(item.category._id);
                    setIsActiveId(item.category._id);
                  }} key={item.id}>
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