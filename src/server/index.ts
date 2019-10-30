import express from 'express';
import { render } from './utils';
import proxy from 'express-http-proxy';
import { getStore } from '../store';
import Routes from '../Routes';
import { matchRoutes } from "react-router-config";

const app = express();
app.use(express.static('dist'));

app.use('/api', proxy('http://localhost:4000', {
  proxyReqPathResolver: function(req) {
    return '/api'+req.url
  }
}));


app.get("*", (req,res)=>{

  const store = getStore();

  const matchedRoutes = matchRoutes(Routes, req.path);

  const promises: Array<any>= [];

  matchedRoutes.forEach( item => {
    if(item.route.loadData){
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      })
      promises.push(promise);
    }
  })
  
  Promise.all(promises).then(() => {
    const context:any = {
      css:[]
    }
    const html = render(store, Routes, req, context);
    if(context.NotFound){
      res.status(404);
      res.send(html);
    }else{
      res.send(html);
    }
  })
})

app.listen(3000,()=>{
  console.log('server qstart at http://localhost:3000');
})