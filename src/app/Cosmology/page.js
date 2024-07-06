"use client";


import '@/styles/globals.css'
import React from 'react';
import LinkCard from '@/components/LinkCard';
import styles from '@/styles/Course.module.css';

const CosmologyPage = () => {
  return (
    <div>
        <main className={styles.main}>
        <h1 className={styles.title}>
          宇宙論コース
        </h1>

        <div className={styles.grid}>
          <LinkCard href="Cosmology/Chapter1" title="1章: 一様・等方宇宙の記述" description="Explore cosmology" card_style={styles.card} />
        </div>
      </main>
    </div>
  );
}

export default CosmologyPage;
