import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Grossary and crockries",
    amount: 200,
    date: new Date(2021, 7, 1),
  },
  {
    id: "e2",
    title: "Clothes and vessals",
    amount: 1000,
    date: new Date(2021, 6, 5),
  },
  {
    id: "e3",
    title: "Fruits and Veggies",
    amount: 100,
    date: new Date(2021, 5, 7),
  },
  {
    id: "e4",
    title: "Denmark and London Trip",
    amount: 2000,
    date: new Date(2020, 9, 15),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log("prevExpenses called");
  };

  return (
    <div>
      <NewExpense onExpenseItem={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
