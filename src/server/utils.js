import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter , Route } from 'react-router-dom'
import Routes from '../Routes';
import { Provider } from 'react-redux';

export const render = (store,req)=>{
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            { Routes.map((route=>(
              <Route {...route}></Route>
            )))}
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
          </script>
          <script src="/index.js"></script>
        </body>
      </html>
    `)
}