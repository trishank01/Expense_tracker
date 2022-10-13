import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpensesList = ({ filterList }) => {
  if (filterList.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {filterList.map((item) => {
        return <ExpenseItem key={item.amount} expenses={item} />;
      })}
    </ul>
  );
};

export default ExpensesList;
