import styles from './header.module.css'

import ProLogo from '../img/wProLogo.svg'
import Loz1 from '../img/loz1.svg'
import DFLogo from '../img/wDFLogo.svg'
import Loz2 from '../img/loz2.svg'
import SfeduLogo from '../img/wSfeduLogo.svg'

export function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.content}>
                <img src={ProLogo} className={styles.logo}/>
                <div className={styles.loz}>Это ваше будующее!</div>
                <img src={DFLogo} className={styles.logo} />
                <div className={styles.loz}>Удобство, простота, надёжность!</div>
                <img src={SfeduLogo} className={styles.logo}/>
            </div>
        </div>
    )
}