import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import { getIsFulfilled } from '../../redux/transactonsForChart/chartSelectors';

import {List, Item, ItemData, ItemImg} from './ReportList.styled'
import repAlcohol from '../../images/rep-alcohol.svg'
// import salary from '../../images/salary.svg'

const ReportList = ({ data, onClickGetChart }) => {
    const isFulfilled = useSelector(getIsFulfilled);
    const [isActiveIdx, setIsActiveId] = useState('');

    return (
        <List>
            {!isFulfilled ? ( <Item>-L-O-A-D-I-N-G-</Item> )
                :
            (data.length === 0 ? ( <Item>Транзакций нет</Item>)
                :
            (data.map((item, index) =>
                (<Item key={index}
                    onClick={() => {
                        onClickGetChart(index);
                        setIsActiveId(index);
                    }} >
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