import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <input/>
      <button>+ ADD</button>
    </form>
  );
};

export default MealItemForm;