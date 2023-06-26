import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/Expenses/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import Card from "./components/UI/Card";

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

  const [filteredYear, setFilteredYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          key={expense.id}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default App;
