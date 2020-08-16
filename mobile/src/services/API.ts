import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.43.158:3333/',
});

export default API;
