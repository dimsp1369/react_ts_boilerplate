import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/configTypes';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
   const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   };

   const tsxLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   const fileLoader = {
      test: /\.(png|jpe?g|gif|woff|woff2)$/i,
      type: 'asset/resource',
   };

   const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
               },
            },
         },
         'sass-loader',
      ],
   };

   return [
      svgLoader,
      fileLoader,
      tsxLoader,
      styleLoader,
   ];
}
