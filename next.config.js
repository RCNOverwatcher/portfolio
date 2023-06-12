const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
      'i.imgur.com',
      'media.tenor.com',
      'user-images.githubusercontent.com',
      'i.ytimg.com',
      'media.discordapp.net',
      'cdn.discordapp.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/programming-tests/test5',
        destination: '/programming-tests/test5',
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
