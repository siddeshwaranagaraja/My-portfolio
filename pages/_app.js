import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Siddeshwara Kallahalli | Product Manager & Strategist</title>
        <meta name="description" content="Portfolio of Siddeshwara Kallahalli - Product Manager, Strategist & Data-Driven Leader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
