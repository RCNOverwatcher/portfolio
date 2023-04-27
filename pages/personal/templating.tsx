import styles from "../../styles/Templating.module.css";
import React from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
import { getConfig } from "../api/templating/configuration";
const data = require('../api/templating/config.json');
import { monarchs, movies, celebrities, books } from "../api/templating/generateInfo";

let PizZipUtils = null;
if (typeof window !== "undefined") {
  import("pizzip/utils/index.js").then(function (r) {
    PizZipUtils = r;
  });
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

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

async function generateDocument(){
  const templateConfig = getConfig();
  const monarch = await monarchs(data.config.year);
  const movieList = await movies(data.config.year);
  const celebrityList = await celebrities(data.config.year);
  const bookList = await books(data.config.year);

  loadFile(
    "https://res.cloudinary.com/dtqhs8nvm/raw/upload/v1682604019/template_fnwyst.docx",
    function (error, content) {
      if (error) {
        throw error;
      }
      let zip = new PizZip(content);
      let doc = new Docxtemplater().loadZip(zip);
      doc.setData({
        years_ago: 2023 - templateConfig.config.year,
        year: templateConfig.config.year,
        monarch: monarch,
        book1: bookList[0],
        book2: bookList[1],
        book3: bookList[2],
        book4: bookList[3],
        book5: bookList[4],
        celebrity1: celebrityList[0],
        celebrity2: celebrityList[1],
        celebrity3: celebrityList[2],
        celebrity4: celebrityList[3],
        celebrity5: celebrityList[4],
        movie1: movieList[0],
        movie2: movieList[1],
        movie3: movieList[2],
        movie4: movieList[3],
        movie5: movieList[4],
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
            .join("\n");
          console.log("errorMessages", errorMessages);
        }
        throw error;
      }
      let out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      saveAs(out, "output.docx");
    }
  );
}

const Templating = () => (
  <div className="mt-8 max-w-xl mx-auto px-8">
    <h1 className="text-center">
      <span className="block text-xl text-gray-600 leading-tight">
        Templating Utility with GPT-3
      </span>
    </h1>
    <br />
    <br />
    <div className="mt-12 text-center">
      <button onClick={generateDocument} className={styles.button}>
        Generate document
      </button>
    </div>
  </div>
);

export async function getStaticProps() {
  const templateConfig = getConfig();
  return {
    props: { title: "Templating", templateConfig },
    revalidate: 10,
  };
}

export default Templating;
