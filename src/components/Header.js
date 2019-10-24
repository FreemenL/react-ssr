import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  WithStyle from '../WithStyle';
import styles from './styles.css';

export default WithStyle(class Header extends Component {
  render() {
    return (
      <div className={styles.test}>
        <Link to='/'>home</Link>
        <br/>
        <Link to='/login'>login</Link>
      </div>
    )
  }
},styles)
