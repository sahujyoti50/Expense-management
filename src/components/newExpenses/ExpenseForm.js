import { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const toggle = false;
  const [toggled, setToggle] = useState(toggle);
  const clickHandler = () => {
    setToggle(true);
  };
  const cancleClickHandler = () => {
    setToggle(false);
  };
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onExpenseData(expenseData);
    setEnteredTitle(""); //reset value to empty field
    setEnteredAmount("");
    setEnteredDate("");
  };
  return toggled === true ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={cancleClickHandler}>Cancel</button>
      </div>
    </form>
  ) : (
    <button onClick={clickHandler}>Add expense button</button>
  );
};
export default ExpenseForm;
