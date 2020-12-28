import axios from 'axios';

const posts = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default posts;
