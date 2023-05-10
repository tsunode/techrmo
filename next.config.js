/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    additionalData: `
      @import "src/styles/variables.scss";
      @import "src/styles/mixin.scss";
    `,
  },
};

module.exports = nextConfig;
