import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>JACOB</h1>
          <h1>WILTSHIRE</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Jacob Wiltshire</h1>
            <h6 className={styles.bio}>Computer Science Student</h6>
            <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}
export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
