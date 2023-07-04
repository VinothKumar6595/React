import React, { useState } from "react";
import NewExpense from "./components/New Expenses/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import Card from "./components/UI/Card";
import ExpenseList from "./components/New Expenses/ExpenseList";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const DUMMYEXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Chennai",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Banglore",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Mumbai",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Delhi",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card>
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </li>
  );
};

export default App;
