import './ExpenseDate.css';

const ExpenseDate = (props) =>{
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    return (
        <div className='date'>
                <div>{month}</div>
                <div className='years'>{year}</div >
                <div className='days'>{day}</div>
            </div>

    );
}

export default ExpenseDate;