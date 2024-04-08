import styles from './width-menu.module.css';
import logoNS from '../../images/cs.png';

export function WidthMenu({icon}){
    return (
        <div className={styles.menu}>
            <img src={logoNS} className={styles.icon}/>
            Цифровой след
        </div>
    )
}