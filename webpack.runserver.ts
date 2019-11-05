import * as webpack from 'webpack';

const WebpackConfig  = require('./webpack.server.config');
// 通过watch来实时编译
webpack(WebpackConfig).watch({
    aggregateTimeout: 300
}, (err: Error) => {
    console.log(err);
});