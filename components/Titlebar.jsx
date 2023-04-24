import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/rcnLogo.png"
        alt="VSCode Icon"
        height={24}
        width={24}
        className={styles.icon}
      />
      <p className={styles.title}>Jacob Wiltshire</p>
    </section>
  );
};

export default Titlebar;
