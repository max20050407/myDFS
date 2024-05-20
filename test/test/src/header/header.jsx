import styles from './header.module.css'

import ProLogo from '../img/wProLogo.svg'
import Loz1 from '../img/loz1.svg'
import DFLogo from '../img/wDFLogo.svg'
import Loz2 from '../img/loz2.svg'
import SfeduLogo from '../img/wSfeduLogo.svg'

export function Header(){
    return(
        <div className={styles.header}>
            <img src={ProLogo} className={styles.logo}/>
            <img src={Loz1} className={styles.logo}/>
            <img src={DFLogo} className={styles.logo}/>
            <img src={Loz2} className={styles.logo}/>
            <img src={SfeduLogo} className={styles.logo}/>
        </div>
    )
}