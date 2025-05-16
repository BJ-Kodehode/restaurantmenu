import { meny } from './data/menuData';
import Menu from './components/Menu';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Restaurantens Meny</h1>
      <Menu dishes={meny} />
    </div>
  );
}

export default App;