import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Animation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <canvas id="spaceCanvas" className={styles.canvas}></canvas>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Science Website
        </h1>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Cosmology &rarr;</h2>
            <p>Explore cosmology</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Galaxy Clusters &rarr;</h2>
            <p>Explore galaxy clusters</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Galaxy Evolution &rarr;</h2>
            <p>Explore galaxy evolution</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Active Galactic Nuclei &rarr;</h2>
            <p>Explore active galactic nuclei</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Star Formation &rarr;</h2>
            <p>Explore star formation</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Interstellar Phenomena &rarr;</h2>
            <p>Explore interstellar phenomena</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
