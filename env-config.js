module.exports = {
  'process.env.BACKEND_URL':
    process.env.NODE_ENV === 'production'
      ? 'https://yunminseok.github.io/Mlog'
      : '',
};
