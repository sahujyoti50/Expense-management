import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  let toggled;
  const expenseDataHandler = (getExpenseData) => {
    const expenseDatas = {
      ...getExpenseData,
    };
    props.onExpenseItem(expenseDatas);
    console.log(expenseDatas);
    console.log("neweExpense.js called!!");
  };
  return (
    <div className="new-expense">
      <ExpenseForm toggles={toggled} onExpenseData={expenseDataHandler} />
    </div>
  );
};
export default NewExpense;
