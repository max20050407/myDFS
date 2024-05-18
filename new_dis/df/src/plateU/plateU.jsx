import styles from './plateU.module.css'

import avaph from '../img/phava.png'

export function PlateU(){
    return(
        <div className={styles.userP}>
{/* ----------------------------------------------------------------------------------- */}
            <div className={styles.left}>
                <input type="text" placeholder="Найти студента!" className={styles.input}/>
                <div className={styles.web}>web</div>
            </div>
{/* ----------------------------------------------------------------------------------- */}
            {/* <div className={styles.right}>
                <div className={styles.fio}>Фамилия<br/>Имя<br/>Отчество<br/>Номер направления<br/>Наименование<br/>Группа</div>
                <div className={styles.avaq}></div>
                <img src={avaph} className={styles.ava}/>
                <div className={styles.title}>Описание</div>
                <div className={styles.cont}></div>
            </div> */}
{/* ----------------------------------------------------------------------------------- */}
        </div>
    )
}