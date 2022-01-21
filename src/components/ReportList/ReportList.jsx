import React from 'react';

import {List, Item} from './ReportList.styled'
import repAlcohol from '../../images/rep-alcohol.svg'
import salary from '../../images/salary.svg'

const transactions = [
    {
        "_id": "61e878e438630fdee30eaf62",
        "type": "costs",
        "category": "спорт,хобби",
        "description": "gym",
        "sum": 350,
        "day": "09",
        "month": "12",
        "year": "2021",
        "owner": "61e8754f36895bfe4aef28fc",
        "createdAt": "2022-01-19T20:47:32.639Z",
        "updatedAt": "2022-01-19T20:47:32.639Z",
        "date": "09.12.2021"
    },
    {
        "_id": "61e8791438630fdee30eaf67",
        "type": "costs",
        "category": "прочее",
        "description": "killer",
        "sum": 10000,
        "day": "09",
        "month": "12",
        "year": "2021",
        "owner": "61e8754f36895bfe4aef28fc",
        "createdAt": "2022-01-19T20:48:20.311Z",
        "updatedAt": "2022-01-19T20:48:20.311Z",
        "date": "09.12.2021"
    },
    {
        "_id": "61e8794e38630fdee30eaf6c",
        "type": "costs",
        "category": "коммуналка, связь",
        "description": "water",
        "sum": 500,
        "day": "09",
        "month": "12",
        "year": "2021",
        "owner": "61e8754f36895bfe4aef28fc",
        "createdAt": "2022-01-19T20:49:18.125Z",
        "updatedAt": "2022-01-19T20:49:18.125Z",
        "date": "09.12.2021"
    },
    {
        "_id": "61e8795638630fdee30eaf71",
        "type": "costs",
        "category": "коммуналка, связь",
        "description": "water",
        "sum": 512,
        "day": "09",
        "month": "12",
        "year": "2021",
        "owner": "61e8754f36895bfe4aef28fc",
        "createdAt": "2022-01-19T20:49:26.964Z",
        "updatedAt": "2022-01-19T20:49:26.964Z",
        "date": "09.12.2021"
    }
];

const ReportList = ({ category }) => {
   
    return (

        <List>
            {category === 'costs' ?
                (transactions.map(item =>
                (<Item>
                    <p>{item.sum}</p>
                    <img width="58" height="58" src={repAlcohol} alt="repAlcohol" />
                    <p>{item.category}</p>
                </Item>)))
                :
                (<Item>
                    <p>7 777</p>
                    <img width="58" height="58" src={salary} alt="salary" />
                    <p>salary</p>
                </Item>)
                }
        </List>
    )
}

export default ReportList;