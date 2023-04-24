import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jacob Wiltshire is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Jacob Wiltshire, web developer portfolio, Jacob Wiltshire portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Jacob Wiltshire's Portfolio" />
      <meta
        property="og:description"
        content="A computer science student"
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jacob Wiltshire',
};
