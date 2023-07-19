import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    console.log('Title changed!', event.target.value);
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  return(
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>{enteredTitle}</label>
            <input type='text' onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>{enteredAmount}</label>
            <input type='number' min="0.01" max="0.01" onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>{enteredDate}</label>
            <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add expense</button>
          </div>
        </div>
      </form>
  )
}

export default ExpenseForm;