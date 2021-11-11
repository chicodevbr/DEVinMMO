import React, { useEffect, useState } from 'react';
import api from '../api/service';
import GamesFinder from '../components/Search/GamesFinder';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('games').then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <main>
      <GamesFinder items={games} />
    </main>
  );
};

export default Home;
