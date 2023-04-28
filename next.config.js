module.exports = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
      'i.imgur.com',
      'media.tenor.com'
    ]
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
      {
        source: '/contact',
        destination: '/',
      },
      {
      source: '/personal',
      destination: '/',
      },
      {
        source: '/github',
        destination: '/',
      },
      {
        source: '/settings',
        destination: '/',
      }
    ]
  },
};
