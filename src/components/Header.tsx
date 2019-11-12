import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import  WithStyle from '../WithStyle';
import styles from './styles.less';

export default WithStyle(class Header extends PureComponent{
  render() {
    return (
      <div className={styles.test}>
        <Link to='/'>这里请问的故事测试一下</Link>
        <br/>
        <Link to='/login'>login</Link>
      </div>
    )
  }
}, styles)
