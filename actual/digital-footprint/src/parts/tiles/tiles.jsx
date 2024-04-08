import styles from './tiles.module.css';

import { User_tile } from './user_tile/user_tile';

export function Tiles(){
    return(
        <div className={styles.Tiles}>
            <div className={styles.tile}></div>
            <div className={styles.tile}></div>
            <div className={styles.tile}><User_tile/></div>
        </div>
    )
}