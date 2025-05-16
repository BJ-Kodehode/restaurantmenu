import styles from './Dish.module.css';

const Dish = ({ tittel, pris, ingredienser, kategori }) => {
  return (
    <article className={styles.card}>
      <header>
        <h3 className={styles.title}>{tittel}</h3>
        <span className={styles.category}>{kategori}</span>
        <p className={styles.price}>{pris}</p>
      </header>
      <p className={styles.ingredients}>{ingredienser}</p>
    </article>
  );
};

export default Dish;