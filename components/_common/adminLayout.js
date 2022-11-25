import Navbar from './header';
import styles from '../styles/admin.module.css';
// import { Link } from 'components';

export default function adminLayout({children}) {
    return (
        <>
          <Navbar admin={true} />
          <div className={styles.container}>
            { children }
          </div>
        </>
    );
}
