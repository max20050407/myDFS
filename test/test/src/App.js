import logo from './logo.svg';
import './App.css';
import styles from './app.module.css';

import { Header } from './header/header';
import { PlateU } from './plateU/plateU';

import p4 from './img/p4.png';
import p3 from './img/p3.png';
import p2 from './img/p2.png';
import p1 from './img/p1.png';
import p0 from './img/p0.png';

function App() {
  return (
    <div className={styles.App}>
      {/* <div className={styles.back}>
        <img src={p4} className={styles.p4}/>
        <img src={p3} className={styles.p3}/>
        <img src={p2} className={styles.p2}/>
        <img src={p1} className={styles.p1}/>
        <img src={p0} className={styles.p0}/>
      </div> */}
      <div className={styles.cont}>
        <div className={styles.header}><Header/></div>
        <div className={styles.plate}><PlateU/></div>
          <div className={styles.plate}>a</div>
          <div className={styles.plate}>a</div>
        <div className={styles.header}>a</div>
      </div>
    </div>
  );
}

export default App;
