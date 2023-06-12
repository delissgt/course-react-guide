import Expenses from "./components/Expenses";

import './App.css';


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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
