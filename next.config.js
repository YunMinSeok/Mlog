/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://yoonminseok.github.io/Mlog'
      : '',
};
