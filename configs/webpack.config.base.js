/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import { dependencies as externals } from '../app/package.json';

dotenv.config();

export default {
  externals: [
    ...Object.keys(externals || {}).filter((x) => x !== 'react-map-gl'),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'process.env.FLUENTFFMPEG_COV': false,
    }),
  ],
};
