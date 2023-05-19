import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Layout from '../components/Layout';
import Head from '../components/Head';
import '../styles/globals.css';
import '../styles/themes.css';
import NextProgressbarSpinner from '../components/ProgressBar';
import { HydrationProvider, Client, Server } from 'react-hydration-provider';

function App({ Component, pageProps }) {
  return (
    <HydrationProvider>
      <Client>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            variables: {
              fontFamily: 'Source Sans Pro, sans-serif',
            },
          }}
          {...pageProps}
        >
          <Layout>
            <Head title={`Jacob Wiltshire | ${pageProps.title}`} />
            <NextProgressbarSpinner />
            <Component {...pageProps} />
          </Layout>
        </ClerkProvider>
      </Client>
    </HydrationProvider>
  );
}

export default App;
