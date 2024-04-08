import styles from './menu.module.css';
import { ButtonMenu } from '../button-menu/button-menu';
import { Avatar } from '../avatar/avatar';
import { MiniInfo } from '../mini-info/mini-info';
import backAva from '../../images/capprice s.png';

export function Menu() {
    // @TODO: make real data
    return (
        <div className={styles.menu}>
            <ButtonMenu/>
            <Avatar icon={backAva}/>
            Мотивченко<br/>Виталий<br/>Спартович<br/>КТбо1-666
            <MiniInfo/>
        </div>
    )
}