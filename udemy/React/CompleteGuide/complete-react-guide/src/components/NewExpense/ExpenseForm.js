import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formActive, setFormActive] = useState(false);

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  const [enteredDate, setenteredDate] = useState('');

  // const [userInput, setUserInput ] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })
  
const titleChangeHandler = (e) => {
  setEnteredTitle(e.target.value);
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: e.target.value,
  // });
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: e.target.value}
  // });
}

const amonutChangeHandler = (e) => {
  setenteredAmount(e.target.value);
}

const dateChangeHandler = (e) => {
  setenteredDate(e.target.value);
}

const submitHandler = (e) => {
  e.preventDefault();

  const expenseData = {
    title: enteredTitle,
    amount: +enteredAmount,
    date: new Date(enteredDate),
  }

  props.onSaveExpenseData(expenseData);
  setEnteredTitle('');
  setenteredAmount('');
  setenteredDate('');
  formcancelHandler();
};

const formcancelHandler = () => {
  setFormActive(false);
};

const formActiveHandler = () => {
  setFormActive(true);
};

if(!formActive) {
  return (
    <div className="new-expense__actions">
      <button type="button" onClick={formActiveHandler}>새 지출 추가</button>
    </div>
  );
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amonutChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={formcancelHandler}>취소</button>
        <button type="submit">추가하기</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
