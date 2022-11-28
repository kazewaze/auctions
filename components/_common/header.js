import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/header.module.css';
import classes from '../../helpers/classes';
import generateLinks from '../../helpers/links';

// import { NavLink } from 'components';
import { userService } from 'services';

const links = {
  "user": generateLinks(['Upcoming Auction', 'Past Auctions', 'Contact']),
  "admin": generateLinks(['Dashboard', 'Users'], true)
};

function MenuButton() {
  return (
    <>
      <input type="checkbox" className={styles.openMobileMenu} id={styles.openMobileMenu} />
      <label htmlFor={styles.openMobileMenu} className={styles.mobileIconToggle}>
        <span className={classes(styles, ["spinner", "diagonal", "one"])}></span>
        <span className={classes(styles, ["spinner", "horizontal"])}></span>
        <span className={classes(styles, ["spinner", "diagonal", "two"])}></span>
      </label>
    </>
  )
}

function MobileMenu({admin, logout}) {
  return (
    <div id={styles.mobileMenu}>
      <ul className={styles.mobileMenuInner}>
      { admin ? links["admin"] : links["user"] }
      { admin ? <li key="LogoutKey"><a onClick={logout}>Logout</a></li> : ''}
      </ul>
    </div>
  )
}

export default function Header({admin}) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe(x => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.imgWrapper}>
            <Link href={admin ? '/admin/dashboard' : '/'}>
              <a>
                <Image height={"50px"} width={"150px"} className={styles.logo} src="/Logo.png" alt="Ingram Auctions Logo"/>
              </a>
            </Link>
          </div>
          <hr className={styles.hLine} noshade="" />
          <ul className={styles.links}>
            { admin ? links["admin"] : links["user"] }
            { admin ? <li key="LogoutKey"><a onClick={logout}>Logout</a></li> : ''}
          </ul>
          <MenuButton />
          <MobileMenu admin={admin} logout={logout} />
        </nav>
      </header>
  )
}