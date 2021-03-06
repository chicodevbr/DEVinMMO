import React, { useEffect, useState } from 'react';
import api from '../api/service';
import Hero from '../components/Hero/Hero';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api
      .get('games', { params: { 'sort-by': 'popularity' } })
      .then((response) => {
        setGames(response.data);
      });
  }, []);

  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('latestnews').then((response) => {
      setNews(response.data);
    });
  }, []);

  return <Hero items={games} lastNews={news} />;
};

export default Home;
