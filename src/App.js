import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let dummyList = [
  {
    id: 'e1',
    title: 'Rent charges',
    amount: 6000,
    date: new Date(2002,5,3),
  },
  {
    id: 'e2',
    title: 'party expenses',
    amount: 3000,
    date: new Date(2023,4,12),
  },
  {
    id: 'e3',
    title: 'food charges',
    amount: 5000,
    date: new Date(2023,9,15),
  },
  {
    id: 'e4',
    title: 'girlfriend expenses',
    amount: 3000,
    date: new Date(2001,2,20),
  },

];
function App() {
  
  const [expenses,setExpenses] = useState(dummyList);
  const upcomingData = (destinatData) =>{
     const updatedExpense = [destinatData,...expenses];
     setExpenses(updatedExpense);
  }

  return (
    <div className='totali'>
      {/* <h1 className='heading'>Total Expenses</h1> */}
      <NewExpense 
      onArrayData = {upcomingData}/>
      <Expenses item = {expenses}/>
 
    </div>

  );
}

export default App;
