/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        // Định nghĩa Sequelize là module external
        config.externals.push('sequelize');
      }
      return config;
    },
  };
  
  export default nextConfig;
  