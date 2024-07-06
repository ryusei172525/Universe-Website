import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import LinkCard from '../components/LinkCard'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        router.push('/mobile'); // 画面幅が600px以下の場合、スマホ用ページにリダイレクト
      }
    };

    handleResize(); // 初期チェック
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

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
          Welcome to RYUSEI's <br /> Universe Website
        </h1>

        <div className={styles.grid}>
          <LinkCard href="#" title="Cosmology" description="Explore cosmology" card_style={styles.card} />
          <LinkCard href="#" title="Galaxy Clusters" description="Explore galaxy clusters" card_style={styles.card} />
          <LinkCard href="#" title="Galaxy Evolution" description="Explore galaxy evolution" card_style={styles.card} />
          <LinkCard href="#" title="Active Galactic Nuclei" description="Explore active galactic nuclei" card_style={styles.card} />
          <LinkCard href="#" title="Star Formation" description="Explore star formation" card_style={styles.card} />
          <LinkCard href="#" title="Interstellar Phenomena" description="Explore interstellar phenomena" card_style={styles.card} />
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://kano-ryusei.net/" target="_blank" rel="noopener noreferrer">
          Creator: Ryusei Kano's Website
        </Link>
      </footer>
    </div>
  )
}
