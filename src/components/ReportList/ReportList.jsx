import React from 'react';

import {List, Item} from './ReportList.styled'
import repAlcohol from '../../images/rep-alcohol.svg'
import salary from '../../images/salary.svg'

const ReportList = ({category}) => {
    return (

        <List>
            <Item>
                <p>summa</p>
                {category === 'Расходы' ?
                   (<img width="58" height="58" src={repAlcohol} alt="repAlcohol" />)
                    :
                    (<img width="58" height="58" src={salary} alt="salary" />)
                }
                <p>{category}</p>
                
            </Item>
        </List>
    )
}

export default ReportList;