/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    path: '/_next/image',
    loaderFile: './my-loader.ts',
  },
};

module.exports = nextConfig;
