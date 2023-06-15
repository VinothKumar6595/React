import React from "react";
import "./ExpenseForm.css";
import "./NewExpense.css";
const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="new-expense">
      <form>
        <div className="new-expene__controls">
          <div className="new-expense__control">
            <label>Expense Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
