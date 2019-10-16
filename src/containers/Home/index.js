import React ,{ Component }from 'react'
// import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
class Home extends Component {

  static loadData(store){
    // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getHomeList())
  }

  constructor(props){
    super(props);
  }

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
      <div>
        { this.getList()}
        <button onClick={()=>{alert('qq')}}>click</button>
      </div>
    )
  }
}

const mapStateToProps= (state) => ({
  name: state.home.name,
  list: state.home.newList
})

const mapDispatchToProps= (dispatch) => ({
  getHomeList(){
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
