import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemFrom";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
const cardCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cardCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    props.onAddToCart(amount);
  }

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
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
