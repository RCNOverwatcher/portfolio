import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';
import { useHotkeys } from 'react-hotkeys-hook';

function toggleSidebar() {
  let x = document.getElementById('sidebar');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

const explorerItems = [
  {
    index: 0,
    name: 'Projects',
    items: [
      {
        index: 0,
        name: 'pointercrate.js',
        path: '/personal/pointercrate',
        icon: 'demon.svg',
      },
      {
        index: 1,
        name: 'raspberry-pygame.py',
        path: '/personal/raspberry-pygame',
        icon: 'python_icon.svg',
      },
      {
        index: 2,
        name: 'templating.ts',
        path: '/personal/templating',
        icon: 'typescript_icon.svg',
      },
    ],
  },
  {
    index: 1,
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    index: 2,
    name: 'about.html',
    path: '/about',
    icon: 'html_icon.svg',
  },
  {
    index: 3,
    name: 'contact.css',
    path: '/contact',
    icon: 'css_icon.svg',
  },
  {
    index: 4,
    name: 'projects.js',
    path: '/projects',
    icon: 'js_icon.svg',
  },
  {
    index: 5,
    name: 'github.md',
    path: '/github',
    icon: 'markdown_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [folderOpen, setFolderOpen] = useState(false);

  useHotkeys('ctrl+b', () => toggleSidebar());

  return (
    <div className={styles.explorer} id="sidebar">
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => {
            if (item.items) {
              return (
                <div className={styles.folder} key={item.index}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    id="folder-checkbox"
                    checked={folderOpen}
                    onChange={() => setFolderOpen(!folderOpen)}
                  />
                  <label
                    htmlFor="folder-checkbox"
                    className={'${styles.folderLabel}'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <ChevronRight
                        className={styles.chevron}
                        style={folderOpen ? { transform: 'rotate(90deg)' } : {}}
                      />
                      {item.name}
                    </div>
                  </label>
                  <div
                    className={styles.subItems}
                    style={
                      folderOpen ? { display: 'block' } : { display: 'none' }
                    }
                  >
                    {item.items.map((subItem) => (
                      <Link
                        href={subItem.path}
                        className={styles.link}
                        key={subItem.index}
                      >
                        <div className={styles.file}>
                          <Image
                            src={`/${subItem.icon}`}
                            alt={subItem.name}
                            height={18}
                            width={18}
                          />
                          <p className={styles.text}>{subItem.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <Link href={item.path} className={styles.link} key={item.index}>
                  <div className={styles.file}>
                    <Image
                      src={`/${item.icon}`}
                      alt={item.name}
                      height={18}
                      width={18}
                    />
                    <p className={styles.text}>{item.name}</p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
