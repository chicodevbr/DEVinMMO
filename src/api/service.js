import axios from 'axios';
import { apiKey } from '../config/index';

const key = process.env.KEY || apiKey;

const api = axios.create({
  baseURL: 'https://mmo-games.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
    'x-rapidapi-key': key,
  },
});

export default api;
