import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemFrom";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
