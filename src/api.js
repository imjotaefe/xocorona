import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brasil.io/api/dataset/covid19/caso',params:{}
});

export default api;