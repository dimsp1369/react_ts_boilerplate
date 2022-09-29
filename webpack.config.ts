import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPath } from './config/build/types/configTypes';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
   const paths: BuildPath = {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
   };

   const mode = env.mode || 'development';
   const isDev = mode === 'development';
   const port = env.port || 3000;

   const config: webpack.Configuration = buildWebpackConfig({
      mode,
      paths,
      isDev,
      port,
   });
   return config;
};
