import styles from './user_tile.module.css';

export function User_tile(){
    return(
        <div className={styles.User_tile}>
            <div className={styles.user_photo}></div>
            <div className={styles.fioga}>
                Фамилия<br/>
                Имя<br/>
                Отчество<br/>
                Группа<br/>
                Возраст
            </div>
            <div className={styles.ficha}>
                Особенности:<br/>
            </div>
        </div>
    )
}