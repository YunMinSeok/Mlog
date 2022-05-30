module.exports = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://yunminseok.github.io/Mlog'
      : '',
  images: {
    loader: 'imgix',
    path: 'https://yunminseok.github.io/Mlog',
  },
  basePath: '/Mlog',
};
