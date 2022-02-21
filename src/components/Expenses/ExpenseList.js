import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return props.item.length === 0 ? (
    <p className="expenses-list__fallback">No Expenses to Display</p>
  ) : (
    props.item.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })
  );
};
export default ExpenseList;
