import React from 'react';

import {List, Item} from './ReportList.styled'
import repAlcohol from '../../images/rep-alcohol.svg'
// import salary from '../../images/salary.svg'

const ReportList = ({ transactions, category }) => {
   
    return (

        // <List>
        //     {transactions.length === 0 ? (<Item>Транзакций нет</Item>) :
            
        //         (transactions.map(item =>
        //         (<Item key={item._id}>
        //             <p>{item.sum}</p>
        //             <img width="58" height="58" src={repAlcohol} alt="repAlcohol" />
        //             <p>{item.category}</p>
        //         </Item>)))
        //         }
        // </List>

        <List>
            {category.length === 0 ? (<Item>Транзакций нет</Item>) :
            
                (category.map(item =>
                (<Item key={item._id}>
                    <p>{item.sum}</p>
                    <img width="58" height="58" src={repAlcohol} alt="repAlcohol" />
                    <p>{item.category}</p>
                </Item>)))
                }
        </List>
    )
}

export default ReportList;