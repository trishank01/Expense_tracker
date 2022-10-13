import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const [enteredTitle , setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [ShowForm , setShowForm] = useState(false)

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }; 

  const submitFormHandler = (e) => {
     e.preventDefault()
     let value = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
     }
    //  SetUserInputValue((prevState) => {
    //   return {...prevState , value}
    //  })
    props.onSaveExpenseData(value)
     setEnteredTitle("")
     setEnteredAmount("")
     setEnteredDate("")
     setShowForm(!ShowForm)
  }
  const changeShowForm = () => {
    setShowForm(!ShowForm)
  }
  return (
      <>
      {ShowForm && <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={changeShowForm}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>}
    {!ShowForm && <button onClick={changeShowForm}>Add Expense Item</button>}
      </>
  );
};

export default ExpenseForm;
