export const path = require("path");
export const baseConfig = require('./webpack.base.ts')
export const LoadablePlugin = require('@loadable/webpack-plugin')
export const nodeExternals = require('webpack-node-externals');
export const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  target: "node",
  mode: "development",
  entry: './src/server/index.ts',
  externals: ['@loadable/component',nodeExternals()],
  module: {
    rules: [{
      test: /\.(le|c)ss$/,
      use: ['isomorphic-style-loader',{
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      },'less-loader'],
      exclude: /node_modules/,
    }]
  },
  output: {
    filename: 'server.js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist/node'),
    libraryTarget: 'commonjs2'
  },
  plugins: [ 
    new LoadablePlugin({
      filename: 'server-manifest.json',
    })
  ]
})

