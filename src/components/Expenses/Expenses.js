import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

const Expenses= (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const changeDateHandler = yearSelected => {
    console.log("DATE Expense", yearSelected)
    setFilteredYear(yearSelected);
  }

  return (
      <Card className={"expenses"}>
        <ExpensesFilter onChangeDate={changeDateHandler} selectedDate={filteredYear}/>
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
      </Card>
  )
}

export default Expenses;