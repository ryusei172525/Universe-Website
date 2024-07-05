import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Mobile.module.css'

export default function Mobile() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mobile Science Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Science Website
        </h1>

        <div className={styles.grid}>
          <Link href="#">
            <div className={styles.card}>
              <h2>Cosmology &rarr;</h2>
            </div>
          </Link>

          <Link href="#">
            <div className={styles.card}>
              <h2>Galaxy Clusters &rarr;</h2>
            </div>
          </Link>

          <Link href="#">
            <div className={styles.card}>
              <h2>Galaxy Evolution &rarr;</h2>
            </div>
          </Link>

          <Link href="#">
            <div className={styles.card}>
              <h2>Active Galactic Nuclei &rarr;</h2>
            </div>
          </Link>

          <Link href="#">
            <div className={styles.card}>
              <h2>Star Formation &rarr;</h2>
            </div>
          </Link>

          <Link href="#">
            <div className={styles.card}>
              <h2>Interstellar Phenomena&rarr;</h2>
            </div>
          </Link>
        </div>

        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
      </main>
    </div>
  )
}
