import axios from 'axios';

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 20000,
};

export default axios.create(config);
