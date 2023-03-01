import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expenseItems =
    props.filteredItems.length === 0 ? (
      <h2 className="expenses-list__fallback">해당 연도에 지출 내역이 없습니다.</h2>
    ) : (
      props.filteredItems.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
    );

  return <ul className="expenses-list">{expenseItems}</ul>;
};

export default ExpensesList;
