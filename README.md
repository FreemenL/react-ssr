### react ssr demo

### ssr codeSplit

1. npm install @loadable/server && npm install --save-dev @loadable/babel-plugin @loadable/webpack-plugin

2. babelrc

```json
{
  "plugins": ["@loadable/babel-plugin"]
}
```

3. webpack.config.js

```js

const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  // ...
  plugins: [new LoadablePlugin()],
}

```

4. Add loadableReady client-side


```js

import { loadableReady } from '@loadable/component'

loadableReady(() => {
  const root = document.getElementById('main')
  hydrate(<App />, root)
})

```
