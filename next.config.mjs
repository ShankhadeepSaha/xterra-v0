/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Adds trailing slashes to URLs (recommended for static hosting)
  basePath: '',  // Set this if your site is not hosted at the root domain
};

export default nextConfig;
