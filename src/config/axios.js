import axios from 'axios';

const customInstance = axios.create({
  baseURL: 'https://api-skylineshop.herokuapp.com/',
  headers: { Accept: 'application/json' },
});

export default customInstance;