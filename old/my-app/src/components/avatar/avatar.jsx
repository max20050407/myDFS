import styles from './avatar.module.css'

export function Avatar({ icon }) {

    return (
        <div className={styles.avatar}>
            <img src={icon} className={styles.icon}/>
        </div>
    )
};
