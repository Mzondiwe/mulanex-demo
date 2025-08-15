/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // <-- tells Next to produce static 'out/'
  images: { unoptimized: true }, // <-- avoids Next/Image optimization server
};
module.exports = nextConfig;
