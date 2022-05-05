module.exports = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://yoonminseok.github.io/Mlog'
      : '',
  images: {
    loader: 'imgix',
    path: 'https://yoonminseok.github.io/Mlog',
  },
  basePath: '/Mlog',
};