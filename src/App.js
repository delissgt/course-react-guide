import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 1,
      date: new Date(2012, 2, 8),
    },
    {
      id: 'e2',
      title: 'Soup',
      amount: 2,
      date: new Date(2011, 3, 4),
    },
    {
      id: 'e3',
      title: 'Lolipops',
      amount: 3,
      date: new Date(2022, 5, 12),
    },
    {
      id: 'e4',
      title: 'Juice',
      amount: 2,
      date: new Date(2011, 9, 3),
    }
  ]

  return (
    <div className="App">
      <h3>hola</h3>
      <p>mundo</p>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </div>
  );
}

export default App;
