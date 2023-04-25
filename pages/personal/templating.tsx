import styles from "../../styles/Templating.module.css";
import React from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
let PizZipUtils = null;
if (typeof window !== "undefined") {
  import("pizzip/utils/index.js").then(function (r) {
    PizZipUtils = r;
  });
}

function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function (
                error,
                key
            ) {
                error[key] = value[key];
                return error;
            },
            {});
    }
    return value;
}

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

const generateDocument = () => {
  loadFile(
    "https://docxtemplater.com/tag-example.docx",
    function (error, content) {
      if (error) {
        throw error;
      }
      let zip = new PizZip(content);
      let doc = new Docxtemplater().loadZip(zip);
      doc.setData({
        first_name: "Jacob",
        last_name: "Wiltshire",
        phone: "0123456789",
        description: "Testing",
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
};

const Templating = () => (
  <div className="mt-8 max-w-xl mx-auto px-8">
    <h1 className="text-center">
      <span className="block text-xl text-gray-600 leading-tight">
        Templating Utility with GPT-4
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
    return {
        props: { title: "Templating"},
        revalidate: 10,
};
}

export default Templating;
