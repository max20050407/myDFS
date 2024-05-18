import './App.css';
import styles from './app.module.css';

import { Header } from './header/header';
import { PlateU } from './plateU/plateU';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}><Header/></div>
      <div className={styles.plate}><PlateU/></div>
      <div className={styles.gallery}>a</div>
      <div className={styles.plate}>a</div>
    </div>
  );
}

export default App;
