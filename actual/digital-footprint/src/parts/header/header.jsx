import styles from './header.module.css';

import ProL from '../../img/wProL.svg';
import SfeduL from '../../img/wSfeduL.svg';
import DFL from '../../img/wDFL.svg';
import DFN from '../../img/DFN.svg';

export function Header(onClick){
    return(
        <div className={styles.Header}>
            <div className={styles.linkB}>
                <img src={ProL} className={styles.logo} onClick={() => { window.location.assign('https://proictis.sfedu.ru/') }}/>
                <img src={SfeduL} className={styles.logo} onClick={() => { window.location.assign('https://sfedu.ru/') }}/>
                <img src={DFL} className={styles.logo}/>
                <img src={DFN} className={styles.logo}/>
            </div>
            <input type="text" placeholder="Найти студента!" className={styles.input}/>
        </div>
    )
}