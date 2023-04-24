import Image from 'next/image';
import styles from '../styles/ThemeInfo.module.css';
import FadeIn from "@rcnoverwatcher/react-fade-in-react-18";

const ThemeInfo = ({ icon, name, publisher, theme }) => {
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
      <FadeIn>
        <div className={styles.container}>
          <Image src={icon} alt={name} height={100} width={100} />
          <div className={styles.info}>
            <div>
              <h3>{name}</h3>
              <h5>{publisher}</h5>
            </div>
            <button onClick={() => setTheme(theme)}>Set Color Theme</button>
          </div>
        </div>
      </FadeIn>
  );
};

export default ThemeInfo;
