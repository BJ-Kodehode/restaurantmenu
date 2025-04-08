import Dish from './Dish';
import styles from './Menu.module.css';

const Menu = ({ dishes }) => {
  return (
    <div className={styles.menuGrid}>
      {dishes.map((dish) => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
};

export default Menu;