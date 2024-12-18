import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
     webpack(config) {
          // Adiciona a configuração de fallback para módulos que não estão presentes
          config.resolve.fallback = {
               fs: false,
               path: false,
          };

          // Adiciona o DefinePlugin ao array de plugins do Webpack
          config.plugins.push(
               new webpack.DefinePlugin({
                    'process.env.FLUENTFFMPEG_COV': JSON.stringify(false),
               })
          );

          return config;
     },
     images: {
          remotePatterns: [
               {
                    hostname: 'adrenapaintball.com'
               }
          ]
     }
};

export default nextConfig;
