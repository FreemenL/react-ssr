import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config"; 
import { ChunkExtractor } from "@loadable/server";
import { resolve } from 'path';

export const render = (store,routes,req,context)=>{

  const statsFile = resolve("./public/client-manifest.json");
  const extractor = new ChunkExtractor({ statsFile });

  const linkTags = extractor.getLinkTags();

    const content = renderToString(extractor.collectChunks(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>
            { renderRoutes(routes) }
          </div>
        </StaticRouter>
      </Provider>
    ))

    return (`
      <html>
        <head>
          <title>react ssr</title>
        </head> 
        <body>
          <div id="root">${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>\n${extractor.getScriptTags()}
        </body>
      </html>
    `)
}