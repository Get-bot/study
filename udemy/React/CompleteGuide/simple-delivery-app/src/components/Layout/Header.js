import styles from './Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>SimpleDelivery</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="테이블을 채운 음식사진"></img>
      </div>
    </>
  );
};

export default Header;