import styles from './plateU.module.css';
import ava from '../img/phava.png'
export function PlateU(){
    return(
        <div className={styles.PlateU}>
            <div className={styles.left}>
                <input type="text" placeholder='Найти студента' className={styles.fist}/>
            </div>
            <div className={styles.right}>
                <img src={ava} className={styles.ava}/>
                <div className={styles.fio}>Фамилия<br/>Имя<br/>Отчество<br/>Номер направления<br/>Наименование<br/>Группа</div>
            </div>
        </div>
    )
}