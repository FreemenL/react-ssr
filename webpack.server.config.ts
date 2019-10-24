const path = require("path");
const baseConfig = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const srcPath = path.resolve(__dirname,'./src')

module.exports = merge(baseConfig,{
  target: "node",
  mode: "development",
  entry: './src/server/index.js',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['isomorphic-style-loader',{
        loader:"css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }],
      exclude: /node_modules/,
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@src': srcPath
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: "commonjs2"
  }
})

