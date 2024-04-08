import logo from './logo.svg';
import './App.css';

import styles from './app.module.css';

import { Header } from './parts/header/header';
import { Tiles } from './parts/tiles/tiles';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}><Header/></div>
      <div className={styles.tiles}><Tiles/></div>
    </div>
  );
}

export default App;
