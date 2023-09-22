import styles from '../../styles/Pointercrate.module.css';
import React, { useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

const Pointercrate = () => {
  const api1 =
    'https://pointercrate.com/api/v2/demons/listed/?limit=50&after=100';
  const api2 = 'https://pointercrate.com/api/v2/demons/listed/?limit=100';

  const [query, setQuery] = useState('');
  const [orderedResults, setOrderedResults] = useState([]);

  const searchData = async () => {
    const response1 = await fetch(api1);
    const data1 = await response1.json();

    const response2 = await fetch(api2);
    const data2 = await response2.json();

    const combinedData = [...data1, ...data2];

    const searchResults = combinedData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );

    const ordered = searchResults.sort((a, b) => a.position - b.position);
    setOrderedResults(ordered);
  };

  return (
    <>
      <h1 className={styles.title}>Pointercrate API Search</h1>
      <input
        className={styles.input}
        type="text"
        id="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <button className={styles.button} onClick={searchData}>
        Search
      </button>
      <div className={styles.results}>
        {orderedResults.map((result) => (
          <div key={result.position}>
            <Image
              src={result.thumbnail}
              alt={result.name}
              width={320}
              height={180}
            />
            <div>
              <Link
                href={`https://pointercrate.com/demonlist/${result.position}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {result.name} <em>({result.position})</em>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Pointercrate Search' },
  };
}

export default Pointercrate;
