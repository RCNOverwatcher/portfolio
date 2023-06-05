import Link from 'next/link';
import styles from '../styles/ProgrammingTests.module.css';

const ProgrammingTests = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Programming Tests</h2>
      <br />
      <div>
        <ul className={styles.unordered}>
          <li className={styles.listElement}>
            <Link href="/programming-tests/test1">
              <h3 className={styles.link}>Test 1</h3>
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/programming-tests/test2">
              <h3 className={styles.link}>Test 2</h3>
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/programming-tests/test3">
              <h3 className={styles.link}>Test 3</h3>
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/programming-tests/test4">
              <h3 className={styles.link}>Test 4</h3>
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/programming-tests/test5">
              <h3 className={styles.link}>Test 5</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Programming Tests' },
    revalidate: 86400,
  };
}

export default ProgrammingTests;
