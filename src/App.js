import { useState } from "react";
import "./App.css";
import ExpensesList from "./components/Expenses/ExpensesList";
import ExpensesFilter from "./components/ExpneseFilter/ExpnsesFilter";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
const expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2021, 2, 13),
  },
  {
    id: "e2",
    title: "bike Insurance",
    amount: 293,
    date: new Date(2020, 5, 23),
  },
  {
    id: "e3",
    title: "home Insurance",
    amount: 291,
    date: new Date(2020, 4, 12),
  },
  { id: "e4", title: "Study loan", amount: 223, date: new Date(2022, 8, 19) },
];
function App() {
  const [expenseValue, setExpenseValue] = useState(expenses);

  const addExpenseHandler = (expnese) => {
    setExpenseValue((prevState) => {
      return [expnese, ...prevState];
    });
  };
  const [filteredYear, setFilteredYear] = useState("2020");

  const addSelectHandler = (year) => {
    setFilteredYear(year);
  };

  const filterList = expenseValue.filter((item) => {
    return item.date.getFullYear() === Number(filteredYear);
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
       <li>
       <Card className="expenses">
        <ExpensesFilter
          onSelectChange={addSelectHandler}
          selected={filteredYear}
        />
         <ExpensesList filterList={filterList}/>
      </Card>
       </li>
       
    </div>
  );
}

export default App;
