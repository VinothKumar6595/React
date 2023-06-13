import React from "react";
import "./ExpenseItem.css";
const ExpenseDetails = (props) => {
  const clickHandler = () => {
    console.log("clicked!!!!");
  };
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__description h2">
        <h3>{props.location}</h3>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default ExpenseDetails;
