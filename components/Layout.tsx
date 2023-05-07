import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';
import useKonami from 'react-use-konami';
import { useState } from 'react';
import Image from 'next/image';
import crashBrowser from '../pages/api/crashBrowser';
import DinoGame from './dinoGame';

const Layout = ({ children }) => {
  useKonami(
    () => {
      const kalebExposal = new Audio(
        'https://res.cloudinary.com/dtqhs8nvm/video/upload/v1682450542/kaleb_a3zfyp.mp3',
      );
      kalebExposal.play();
    },
    {
      code: ['k', 'a', 'l', 'e', 'b'],
    },
  );

  useKonami(
    () => {
      crashBrowser();
    },
    {
      code: ['c', 'r', 'a', 's', 'h'],
    },
  );

  const [showDinoGame, setShowDinoGame] = useState(false);
  useKonami(
    () => {
      setShowDinoGame(showDinoGame => !showDinoGame);
    },
    {
      code: ['d', 'i', 'n', 'o'],
    },
  );

  const [showYouShould, setShowYouShould] = useState(false);
  useKonami(
    () => {
      setShowYouShould(showYouShould => !showYouShould);
    },
    {
      code: [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
        'Enter',
      ],
    },
  );

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
        {showYouShould && (
          <Image
            src={
              'https://res.cloudinary.com/dtqhs8nvm/image/upload/v1682447998/kys_kvq9wm.gif'
            }
            alt={'hehe'}
            width={1000}
            height={1000}
          />
        )}

        {showDinoGame && <DinoGame />}
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
