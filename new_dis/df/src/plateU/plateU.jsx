import styles from './plateU.module.css'

import phava from '../img/phava.png'

export function PlateU(){
    return(
        <div className={styles.PlateU}>
            <div className={styles.left}>
                <input type="text" placeholder='Найти студента' className={styles.input}/>
                <div className={styles.web}>digital web</div>
            </div>
            <div className={styles.right}>
                <div className={styles.fio}>
                    Фамилия<br/>
                    Имя<br/>
                    Отчество<br/>
                    Возраст<br/>
                    Группа<br/>
                </div>
                <img src={phava} className={styles.ava}/>
                <div className={styles.disT}>Особенности:</div>
                <div className={styles.dis}></div>
            </div>
        </div>
    )
}