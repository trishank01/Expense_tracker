import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { expenses } = props;

  //const [Title, setTitle] = useState(expenses.title);
  // const ClickHandler = () => {
  //   setTitle("change");
  // };

  return (
    <Card className="expense-item">
       <ExpenseDate data={expenses.date} />
        <div className="expense-item__description">
          <h2>{expenses.title}</h2>
          <div className="expense-item__price">${expenses.amount}</div>
        </div>
        {/* <button onClick={() => ClickHandler(expenses.title)}>
          Change title
        </button> */}
    </Card>
  );
};

export default ExpenseItem;
