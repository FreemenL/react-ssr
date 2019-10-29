
import { CHANGE_LIST } from './contants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => ( dispatch, getState, axiosInstance) =>
    axiosInstance.get('/api/news.json')
   .then((res)=>{
    const list = res.data.data;
    dispatch(changeList(list))
  })
