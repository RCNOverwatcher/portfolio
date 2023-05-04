import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jacob Wiltshire | Computer Science Student"
      />
      <meta
        name="keywords"
        content="Jacob Wiltshire, developer portfolio, Jacob Wiltshire portfolio"
      />
      <meta property="og:title" content="Jacob Wiltshire's Portfolio" />
      <meta property="og:description" content="A computer science student" />
      <meta property="og:url" content="https://jacobwiltshire.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jacob Wiltshire',
};
