import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

export default [
  {
    key:"Home",
    path: "/",
    exact: true,
    component: Home,
    loadData: Home.loadData
  },{
    key:"Login",
    path: "/login",
    exact: true,
    component: Login,
  }
]

