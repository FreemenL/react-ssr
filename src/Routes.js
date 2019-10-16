import loadable from "@loadable/component";

export default [
  {
    key:"app",
    path: "/",
    component: loadable(() => import("./App")),
    routes:[
      {
        key:"Home",
        path: "/",
        exact: true,
        component: loadable(() => import("./containers/Home")),
        loadData: loadable(() => import("./containers/Home")).loadData
      },{
        key:"Login",
        path: "/login",
        exact: true,
        component: loadable(() => import("./containers/Login")),
      },{
        path: "*",
        component: loadable(() => import("./containers/NotFound")),
      }
    ]
  }
]

