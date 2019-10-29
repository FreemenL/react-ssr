const { run } = require('runjs');
console.log('build client')
run("cross-env NODE_ENV=development PLATFORM=client TS_NODE_PROJECT=\"config/tsconfig-for-webpack-config.json\" webpack --config webpack.client.config.ts --profile --json > compiler.json")


