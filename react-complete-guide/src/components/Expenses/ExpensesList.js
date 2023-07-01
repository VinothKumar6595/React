import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.items.length === 1) {
    return props.items.map((expense) => (
      <div>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          key={expense.id}
        ></ExpenseItem>
        <div>
          <h1 className="expenses-list__fallback">
            Only single Expense here. Please add more...
          </h1>
        </div>
      </div>
    ));
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <div>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            key={expense.id}
          ></ExpenseItem>
        </div>
      ))}
    </ul>
  );
};

export default ExpenseList;
