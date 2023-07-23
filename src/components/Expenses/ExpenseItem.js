import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';


const ExpenseItem = (props) =>{
    return (
        <Card className='expense-item'>
            <ExpenseDate date ={props.date} />
            <div className='expense-item_discript'>
                <h2>{props.title}</h2>
                <div className='expense-item_cost'>{props.coste}</div>
            </div>

        </Card>
    ); 

}

export default ExpenseItem;