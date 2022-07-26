const env = require('./env-config');

module.exports = {
  presets: ['next/babel', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
    ['transform-define', env],
  ],
};
