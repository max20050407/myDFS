import styles from './app.module.css'

import logo from './logo.svg';

import './App.css';

import { Header } from './header/header';
import { PlateU } from './plateU/plateU';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.skip}></div>
      <div className={styles.plate}>
        <div className={styles.content}>
          <PlateU/>
        </div>
      </div>
      <div className={styles.skip}></div>
      <div className={styles.gallery}>
        gallery
      </div>
      <div className={styles.skip}></div>
      <div className={styles.plate}>
        <div className={styles.content}>
          achive plate
        </div>
      </div>
      <div className={styles.skip}></div>
    </div>
  );
}

export default App;