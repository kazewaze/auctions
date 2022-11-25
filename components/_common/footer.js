import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/footer.module.css'

export default function Footer({ loggedIn }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.brandContainer}>
          <a href="https://kazewaze.com">
            <Image height={"50px"} width={"50px"} className={styles.logo} src="/gelloh_png.png" alt="kazewaze logo"/>
          </a>
        </div>
      <ul className={styles.footerLinks}>
        <li key={"AboutKey"}>
          <Link href="/about">
            About
          </Link>
        </li>
        <li key={"LoginKey"}>
          <Link href="/admin/login">Login</Link>
        </li>
      </ul>
      <p>Copyright © 2022 Ingram Auctions</p>
    </footer>
  )
}