import styles from './button-menu.module.css';
import { Button } from '../ui/button/button';
import backSlide from '../../images/slide.png';
import backdSfedu from '../../images/sfedu mini.png';
import backIK from '../../images/sfedu mini.png';
import backProIk from '../../images/proictis logo white.png';

export function ButtonMenu() {

    return (
        <div className={styles.menu}>
            <Button icon={backSlide} onClick={() => { alert(123) }}/>
            <Button icon={backdSfedu} onClick={() => { window.location.assign('https://sfedu.ru/')}}/>
            <Button icon={backIK} onClick={() => { window.location.assign('https://ictis.sfedu.ru/') }}/>
            <Button icon={backProIk} onClick={() => { window.location.assign('https://proictis.sfedu.ru/') }}/>
        </div>
    )
};

