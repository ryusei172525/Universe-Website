"use client";

import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import LinkCard from '@/components/LinkCard'
import styles from '@/styles/Mobile.module.css'

export default function Mobile() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mobile Universe Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <canvas id="spaceCanvas" className={styles.canvas}></canvas>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to RYUSEI'S <br /> Universe Website
        </h1>

        <div className={styles.grid}>
          <LinkCard href="Cosmology" title="Cosmology"  card_style={styles.card} />
          <LinkCard href="#" title="Galaxy Clusters"  card_style={styles.card}/>
          <LinkCard href="#" title="Galaxy Evolution"  card_style={styles.card} />
          <LinkCard href="#" title="Active Galactic Nuclei"  card_style={styles.card} />
          <LinkCard href="#" title="Star Formation"  card_style={styles.card} />
          <LinkCard href="#" title="Interstellar Phenomena"  card_style={styles.card} />
        </div>
      </main>
    </div>
  )
}
