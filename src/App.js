import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";


function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294, date: new Date(2021, 2, 13) },
    { title: "bike Insurance", amount: 293, date: new Date(2020, 5, 23) },
    { title: "home Insurance", amount: 291, date: new Date(2010, 4, 12) },
    { title: "Study loan", amount: 223, date: new Date(2025, 8, 19) },
  ];
  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses} />
    </Card>
  );
}

export default App;
