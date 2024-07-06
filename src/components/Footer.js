import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import '@/styles/globals.css'

const Footer = () => (
    <footer className={styles.footer}>
        <Link href="https://kano-ryusei.net/" target="_blank" rel="noopener noreferrer">
        Creator: Ryusei Kano's Website
        </Link>
    </footer>
)

export default Footer;
