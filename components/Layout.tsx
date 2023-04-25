import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';
import useKonami from "react-use-konami";
import {useState} from "react";
import Image from "next/image";



const Layout = ({ children }) => {
    const [isActive, setActive] = useState("false");

    useKonami(() => {
        // @ts-ignore
        setActive(isActive => !isActive);
        const audio = new Audio("https://res.cloudinary.com/dtqhs8nvm/video/upload/v1682450542/kaleb_a3zfyp.mp3");
        audio.play();
    });
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
          <Image className={isActive ? "hide" : null} src={"https://res.cloudinary.com/dtqhs8nvm/image/upload/v1682447998/kys_kvq9wm.gif"} alt={"hehe"} width={1000} height={1000}/>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
