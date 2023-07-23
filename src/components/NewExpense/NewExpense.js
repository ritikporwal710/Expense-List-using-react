import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (entereredData) =>{
        const expanData = {
            ...entereredData,
            id: Math.random().toString()
        } 

        props.onArrayData(expanData);
        console.log(expanData);
        
    }
    return (
        <div className="new-expense">
            <ExpenseForm 
            onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    );


}

export default NewExpense;