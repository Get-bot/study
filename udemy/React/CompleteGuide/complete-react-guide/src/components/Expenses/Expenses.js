import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = filteredYear === "all" ? props.expenses : props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onAddSelectedYear={filterChangeHandler} />
      <Card>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredItems={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
