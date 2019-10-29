export const path = require("path");
export const baseConfig = require('./webpack.base.ts')
export const LoadablePlugin = require('@loadable/webpack-plugin')
export const nodeExternals = require('webpack-node-externals');
export const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  target: "node",
  mode: "development",
  entry: './src/server/index.ts',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['isomorphic-style-loader',{
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }],
      exclude: /node_modules/,
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs2'
  }
})
