module.exports = {
  
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
      },
    ];
  },
};
