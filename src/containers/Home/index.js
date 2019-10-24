import React ,{ Component , Fragment }from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import  WithStyle from '../../WithStyle';
import styles from './style.css';

class Home extends Component {

  renderItem(){
    return (item)=>(<div key={item.id}>{item.title}</div>)
  }

  getList(){
    const { list } = this.props;
    return list.map(this.renderItem())
  }

  // componentDidMount 这个生命周期只会在客户端渲染的时候执行 所以列表是由客户端渲染出来的
  componentDidMount() {
    if(!this.props.list.length){
      this.props.getHomeList();
    }
  }
  
  render(){
    return (
      <Fragment>
        <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet"></meta>
        </Helmet>
        <div className={ styles.test }>
          { this.getList() }
          <button onClick={()=>{alert('qq')}}>click</button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.newList
})

const mapDispatchToProps = (dispatch) => ({
  getHomeList(){
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(WithStyle(Home,styles,getHomeList))
