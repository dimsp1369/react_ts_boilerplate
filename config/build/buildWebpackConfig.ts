import webpack from 'webpack';
import { BuildOptions } from './types/configTypes';
import { buildLoaders } from './buildLoaders';
import buildResolve from './buildResolve';
import { buildDevServer } from './buildDevServer';
import buildPlugins from './buildPlugins';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
   const { mode, paths, isDev } = options;
   return {
      entry: paths.entry,
      mode,
      output: {
         filename: '[name].[contenthash].js',
         path: paths.build,
         clean: true,
      },
      module: {
         rules: buildLoaders(options),
      },
      resolve: buildResolve(options),
      plugins: buildPlugins(options),
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: isDev ? buildDevServer(options) : undefined,
   };
}
