import logo from './logo.svg';
import { Menu } from './components';
import { WidthMenu } from './components/width-menu/width-menu';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <WidthMenu />
      <Menu />
    </div>
  );
}

export default App;
