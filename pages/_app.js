import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
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

  return <Component {...pageProps} />
}

export default MyApp
