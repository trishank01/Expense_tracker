import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const {data} = props
    console.log(data)
  return (
    <div className="expense-date">
      <div className="expense-date__month">{data.toLocaleString("en-Us", { month: "long" })}</div>
      <div className="expense-date__year">{data.getFullYear()}</div>
      <div className="expense-day">{data.toLocaleString("en-Us", { day: "2-digit" })}</div>  
    </div>
  );
};

export default ExpenseDate;
