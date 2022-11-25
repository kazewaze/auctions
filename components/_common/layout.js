import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

import Navbar from './header'
import Footer from './footer'

import styles from '../styles/layout.module.css'
// import utilStyles from '../styles/utils.module.css'

const siteTitle = 'Ingram Auctions'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon_svg.svg" />
        <meta
          name="author"
          content="Kaycee Ingram <kazewaze>"
        />
        <meta
          name="description"
          content="Ronnie Ingram's Auctions"
        />
        <meta
          property="og:image"
          content="/favicon_svg.svg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/favicon_svg.svg" />
        <meta property="og:url" content="https://ronnieingram.vercel.app" />
        <meta property="og:site_name" content="Ingram Auctions" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Navbar admin={false} />
        <div className={ styles.container }>
          {/* <div className={ utilStyles.introContainer }></div> */}
          <main>{ children }</main>
        </div>
      <Footer/>
    </>
  )
}