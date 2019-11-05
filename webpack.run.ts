export const  webpack = require("webpack")
const { run } = require('runjs');
const WebpackClientConfig  = require('./webpack.client.config');
const WebpackServerConfig  = require('./webpack.server.config');
var cp = require('child_process');


//异步流
class AsyncHook{
  hooks:Array<any>
  constructor(){
      this.hooks = [];
  }
  /**
   * 订阅
   * name 当前订阅者 
   * fn   收到消息后执行的函数
  */
  tapAsync(name,fn){
      /**fn 函数接受四个参数 
       * tag |string当前执行者 
       * task|string任务 
       * result |any 前一个执行结果 
       * next | Functon下一个任务 当前的执行结果传给next
      **/
      this.hooks.push({name,fn});
  }
  /**
   *args[0] | any 任务
   *args[1] | Function 最终的回调
   */
  callAsync(...args){
      const task = args[0];
      const done = args[args.length-1];
      let index = 0;
      const next = (result?)=>{      
          this.hooks[index]?this.hooks[index]["fn"](this.hooks[index]["name"],task,result,next):done(task,result);
          index++;
      }   
      next();
  }
}

const queue = new AsyncHook;



queue.tapAsync("delDev", (tag, task, result, next) => {
  webpack(WebpackClientConfig).watch({
    aggregateTimeout: 300
  }, (err: Error) => {
    if(!err){
      next('success')
    }
    next('error')
  })
})

/**
* 开始构建
*/
queue.tapAsync("start building...", (tag, task, result, next) => {
  webpack(WebpackServerConfig).watch({
    aggregateTimeout: 300
  }, (err: Error) => {
    if(!err){
      /* 如果不是开启子进程的方式 执行的话  webpack的watch 会失效*/
      cp.spawn('node', ['./dist/node/server.js'])
      next('1success')
    }
    next('1error')
  })
})

queue.callAsync("build", (task,result) => {
  console.log(result)
});
