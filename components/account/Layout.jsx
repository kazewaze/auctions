import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { userService } from 'services';

import styles from '../styles/account.module.css';

export function Layout({ children }) {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.container}>
          <div className={styles.main}>
            {children}
          </div>
        </div>
    );
}