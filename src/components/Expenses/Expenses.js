import React from 'react';
import ExpenseItem from './ExpenseItem'; 
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    return (

        <Card className = 'expenses'>
            {
                props.item.map(
                    expense =>(
                        <ExpenseItem 
                            date =  {expense.date}
                            title = {expense.title}
                            coste = {expense.amount}/>
                    )
                )
            }
       

    </Card>

    );

}

export default Expenses;  