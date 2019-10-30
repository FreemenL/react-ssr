export const path = require("path");
export const fs = require("fs");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
export const LoadablePlugin = require('@loadable/webpack-plugin')

const srcPath = path.resolve(__dirname,'./src')

module.exports = {

  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      '@src': srcPath
    }
  },

  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          useBabel: true,
          transpileOnly: true,
          useTranspileModule: false,
          sourceMap: true,
          forceIsolatedModules: true,
          babelCore: "@babel/core",
          reportFiles: [
            "src/**/*.{ts,tsx}",
            "server/**/*.{ts,tsx}"
          ],
          configFileName: path.resolve(fs.realpathSync(process.cwd()),'tsconfig.json')
      }}]
      },{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }]
  },

  plugins: [ 
    new webpack.ProgressPlugin(),
    new LoadablePlugin({
      filename: `${process.env.PLATFORM}-manifest.json`,
    })
  ]

}



