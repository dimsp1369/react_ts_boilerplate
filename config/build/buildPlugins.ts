import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/configTypes';

export default function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
   return [
      new HtmlWebpackPlugin({
         template: paths.html,
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
         filename: 'css/[name].[hash:8].css',
         chunkFilename: 'css/[name].[hash:8].css',
      }),
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
   ];
}
