import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";


const HeaderCartButton = (props) => {
  return (
    <>
      <button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon/>
          </span>
        <span>
          장바구니
        </span>
        <span className={styles.badge}>
          3
        </span>
      </button>
    </>
    );
};

export default HeaderCartButton;