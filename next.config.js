module.exports = {
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
      'i.imgur.com'
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
      source: '/projects',
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
