import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  WithStyle from '../WithStyle';
import styles from './styles.css';

interface Props{
  staticContext: any
}

export default WithStyle(class Header extends Component<Props, any>{
  render() {
    return (
      <div className={styles.test}>
        <Link to='/'>home</Link>
        <br/>
        <Link to='/login'>login</Link>
      </div>
    )
  }
}, styles)
