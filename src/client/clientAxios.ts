import axios from 'axios';

const serverAxios = axios.create({
  baseURL: '/'
})

export default serverAxios;
