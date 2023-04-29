import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import NextProgressbarSpinner from "../components/ProgressBar";


function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head title={`Jacob Wiltshire | ${pageProps.title}`} />
        <NextProgressbarSpinner/>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
