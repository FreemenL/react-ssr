export const { run } = require('runjs');
console.log('run cmd');
run("cross-env NODE_ENV=development  PLATFORM=server TS_NODE_PROJECT=\"config/tsconfig-for-webpack-config.json\" webpack --config webpack.server.config.ts");
