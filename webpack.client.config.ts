export const path = require("path");
export const merge = require('webpack-merge');
export const LoadablePlugin = require('@loadable/webpack-plugin')
export const baseConfig = require('./webpack.base.ts')

module.exports = merge(baseConfig,{
  mode: "development",
  entry:  "./src/client/index",
  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader',{
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
  optimization: {
    splitChunks: {
      chunks: "all",  // chunk选择范围
      cacheGroups: {
        vendor: {
          test: function(module) {
            // 阻止.css文件资源打包到vendor chunk中
            if(module.resource && /\.css$/.test(module.resource)) {
              return false;
            }
            // node_modules目录下的模块打包到vendor chunk中
            return module.context && module.context.includes("node_modules");
          }
        }
      }
    },
    // webpack引导模块
    runtimeChunk: {
      name: "manifest"
    }
  }
})