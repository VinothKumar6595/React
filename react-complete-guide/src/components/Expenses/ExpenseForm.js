import React, { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense.css";
const ExpenseForm = () => {
  const [enteredTitile, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <div className="new-expense">
      <form>
        <div className="new-expene__controls">
          <div className="new-expense__control">
            <label>Expense Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitile}
            />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
