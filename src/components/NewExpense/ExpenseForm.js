import React, {useState} from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [newTitle,setNewTitle] = useState(""); 
    const [newAmount,setNewAmount] = useState(""); 
    const [newDate,setNewDate] = useState(""); 

    const titleHandler = (event) =>{
        setNewTitle(event.target.value);
    };
    const amountHandler = (event) =>{
        setNewAmount(event.target.value);
    };
    const dateHandler = (event) =>{
        setNewDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault(); 
        const expenseData = {
            title : newTitle,
            amount : newAmount,
            date : new Date(newDate)
        }

        props.onSaveExpenseData(expenseData);
        console.log(expenseData);

        setNewTitle('');
        setNewAmount('');
        setNewDate(''); 
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title </label>
                    <input type="text" value={newTitle} onChange={titleHandler}/>
                </div>

                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number" min={10} step={5} value={newAmount} onChange={amountHandler}/>
                </div>

                <div className="new-expense__control">
                    <label> Date </label>
                    <input type="date" value={newDate} onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    );
}

export default ExpenseForm;