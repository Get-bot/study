import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "자동차 정비",
    amount: 50000,
    date: new Date(2023, 2, 25),
  },
  {
    id: "e2",
    title: "슈퍼마켓",
    amount: 32000,
    date: new Date(2023, 2, 23),
  },
  {
    id: "e3",
    title: "친구와 점심",
    amount: 12000,
    date: new Date(2023, 2, 21),
  },
  {
    id: "e4",
    title: "강아지 병원비",
    amount: 75000,
    date: new Date(2023, 2, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
