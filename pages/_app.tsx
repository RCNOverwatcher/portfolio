import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { dark } from "@clerk/themes";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          fontFamily: "Source Sans Pro, sans-serif",
        },
      }}
      {...pageProps}
    >
      <Layout>
        <Head title={`Jacob Wiltshire | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}

export default MyApp;
