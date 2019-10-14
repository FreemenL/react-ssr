import React, { Component } from 'react'
import Header from '../../components/Header';

export default class Login extends Component{
  render() {
    return (
      <div>
        <Header/>
        Login pagesss
        <button onClick={()=>{alert('qq')}}>click</button>
      </div>
    )
  }
}
