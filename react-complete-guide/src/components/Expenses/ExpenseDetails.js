import React, { useState } from "react";
import "./ExpenseItem.css";
const ExpenseDetails = (props) => {
  let [amount, setExpense] = useState(props.amount);
  const clickHandler = () => {
    setExpense(100);
  };
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__description h2">
        <h3>{props.location}</h3>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler} className="delete-button">
        Modify Expense
      </button>
    </div>
  );
};

export default ExpenseDetails;
