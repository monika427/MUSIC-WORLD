import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to MUSIC WORLD</title>
        <meta name="description" content="Genreated by create next app" />
        <link rel="icon" href="/icon.a.png" />

      </Head>
      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to MUSIC World
        </h2>

        <div className={styles.grid}>
          <Link href="/" >
            <a className={styles.card}>
              <h2>Home &rarr;</h2>
            </a>
          </Link>

          <Link href="/Search" >
            <a className={styles.card}>
              <h2>Search &rarr;</h2>
            </a>
          </Link>

          <Link
            href="/Albumdetail"

          >
            <a className={styles.card}>
              <h2>Albumdetail &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>
    </div>
  )
}
