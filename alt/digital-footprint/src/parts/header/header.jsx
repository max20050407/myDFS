import styles from './header.module.css';

import ProL from '../../img/cProLogo.svg';
import SfeduL from '../../img/cSfeduLogo.svg';
import DFL from '../../img/cDFLogo.svg';
import DFN from '../../img/DFN.svg';

export function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.linkB}>
                <img src={ProL} className={styles.logo}/>
                <img src={SfeduL} className={styles.logo}/>
                <img src={DFL} className={styles.logo}/>
                <img src={DFN} className={styles.logo}/>
            </div>
            <input type="text" placeholder="Найти студента!" className={styles.input}/>
        </div>
    )
}