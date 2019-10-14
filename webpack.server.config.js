const path = require("path");
const baseConfig = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');

module.exports = merge(baseConfig,{
  target: "node",
  mode: "development",
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
})