import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const { value: enteredName, isValid: enteredNameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangeHandler, inputBlurHandler: nameBlurHandler, reset: resetNameInput } = useInput((value) => value.trim() !== "");
  const { value: enteredemail, isValid: enteredEmailIsValid, hasError: emailInputHasError, valueChangeHandler: EmailChangeHandler, inputBlurHandler: EmailBlurHandler, reset: resetEmailInput } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitsionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();

  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitsionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" style={{ marginBottom: "10px" }} onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">입력값이 없습니다.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="email" id="email" style={{ marginBottom: "10px" }} onChange={EmailChangeHandler} onBlur={EmailBlurHandler} value={enteredemail} />
        {emailInputHasError && <p className="error-text">입력이 올바르지 않습니다.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
