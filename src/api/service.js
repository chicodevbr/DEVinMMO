import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mmo-games.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
    'x-rapidapi-key': '840c6bdc79msh2da865eb54f2b06p1279d6jsn0ad649893924',
  },
});

export default api;
