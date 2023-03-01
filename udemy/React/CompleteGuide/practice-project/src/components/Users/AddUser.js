import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUser, setenteredUser] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState();

  const userInputChangeHandler = (e) => {
    setenteredUser({
      ...enteredUser,
      [e.target.name]: e.target.value,
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUser.username.trim().length === 0 || enteredUser.age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if(+enteredUser.age < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUser);

    setenteredUser({
      username: "",
      age: "",
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={userInputChangeHandler} name="username" value={enteredUser.username} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={userInputChangeHandler} name="age" value={enteredUser.age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
