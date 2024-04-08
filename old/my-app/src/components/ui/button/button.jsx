import styles from './button.module.css';

export function Button({ onClick, icon }) {

    return (
        <button className={styles.button} onClick={onClick}>
            <img src={icon} className={styles.icon}/>
        </button>
    )
}