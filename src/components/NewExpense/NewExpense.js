import React from 'react';
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (exteredExpenseData) => {
    const expenseData = {
      ...exteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData)

    console.log("ExpenseData-NewExpense", expenseData)
  }


  return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
  )
}

export default NewExpense;