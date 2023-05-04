import styles from '../../styles/Templating.module.css';
import React, { useState } from 'react';
import store from 'store2';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { saveAs } from 'file-saver';
import {
  monarchs,
  movies,
  celebrityList,
  books,
  worldPopulation,
  UKPopulation,
} from '../api/templating/generateInfo';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { PulseLoader } from 'react-spinners';
import catchErrors from '../api/templating/catchErrors';

let PizZipUtils = null;
if (typeof window !== 'undefined') {
  import('pizzip/utils/index.js').then(function (r) {
    PizZipUtils = r;
  });
}

function storeAPIKey() {
  if (typeof window === 'object') {
    const input = document.getElementById('api_key') as HTMLInputElement | null;
    const api_key = input.value;
    store('api_key', api_key);
  }
}
function storeYear() {
  if (typeof window === 'object') {
    const input = document.getElementById('year') as HTMLInputElement | null;
    const year = input.value;
    store('year', year);
  }
}

function replaceErrors(key, value) {
  if (value instanceof Error) {
    return Object.getOwnPropertyNames(value).reduce(function (error, key) {
      error[key] = value[key];
      return error;
    }, {});
  }
  return value;
}

function useBasicGPT() {
  store('model', 'gpt-3.5-turbo');
}

function useAdvancedGPT() {
  store('model', 'gpt-4');
}

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

async function generateDocument() {
  const monarch = await monarchs(store.get('year'), store.get('model'));
  const movieList = await movies(store.get('year'), store.get('model'));
  const celebrities = await celebrityList(
    store.get('year'),
    store.get('model'),
  );
  const bookList = await books(store.get('year'), store.get('model'));
  const worldPop = await worldPopulation(store.get('year'), store.get('model'));
  const UKPop = await UKPopulation(store.get('year'), store.get('model'));

  catchErrors(monarch, movieList, celebrities, bookList, worldPop, UKPop);

  loadFile(
    'https://res.cloudinary.com/dtqhs8nvm/raw/upload/v1682679318/template.docx',
    function (error, content) {
      if (error) {
        throw error;
      }
      let zip = new PizZip(content);
      let doc = new Docxtemplater().loadZip(zip);
      doc.setData({
        years_ago: 2023 - store.get('year'),
        year: store.get('year'),
        monarch: monarch,
        book1: bookList[0],
        book2: bookList[1],
        book3: bookList[2],
        book4: bookList[3],
        book5: bookList[4],
        celebrity1: celebrities[0],
        celebrity2: celebrities[1],
        celebrity3: celebrities[2],
        celebrity4: celebrities[3],
        celebrity5: celebrities[4],
        movie1: movieList[0],
        movie2: movieList[1],
        movie3: movieList[2],
        movie4: movieList[3],
        movie5: movieList[4],
        world_pop: worldPop,
        uk_pop: UKPop,
      });
      try {
        doc.render();
      } catch (error) {
        console.log(JSON.stringify({ error: error }, replaceErrors));

        if (error.properties && error.properties.errors instanceof Array) {
          const errorMessages = error.properties.errors
            .map(function (error) {
              return error.properties.explanation;
            })
            .join('\n');
          console.log('errorMessages', errorMessages);
        }
        document.getElementById('log').innerHTML = error;
        throw error;
      }
      let out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      saveAs(out, 'output.docx');
    },
  );
}

const Templating = () => {
  const [isSpinnerActive, setSpinnerActive] = useState(false);
  async function produceDocument() {
    setSpinnerActive(true);
    generateDocument().then(function () {
      document.getElementById('log').innerHTML =
        'Document created successfully';
      setSpinnerActive(false);
    });
  }
  return (
    <div>
      <SignedIn>
        <div>
          <h1>
            <span>GPT Templating Utility</span>
          </h1>
          <div>
            <input name="API Key" type="text" id="api_key" />
            <button onClick={storeAPIKey} className={styles.button}>
              Store OpenAI API Key
            </button>
          </div>
          <div>
            <input name="Year" type="text" id="year" />
            <button onClick={storeYear} className={styles.button}>
              Store Year
            </button>
          </div>
          <br />
          <div>
            <button onClick={useBasicGPT} className={styles.choiceButton}>
              Use GPT 3.5 Turbo
            </button>
            <button onClick={useAdvancedGPT} className={styles.choiceButton}>
              Use GPT 4
            </button>
          </div>
          <br />
          <div>
            <button onClick={produceDocument} className={styles.button}>
              Generate document
            </button>
            <PulseLoader
              color={'#2D5C9A'}
              loading={isSpinnerActive}
              size={50}
              cssOverride={{
                display: 'block',
                margin: '20 auto',
              }}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <br />
            <br />
            <span id={'log'}></span>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};
export async function getStaticProps() {
  return {
    props: { title: 'Templating' },
    revalidate: 10,
  };
}

export default Templating;
