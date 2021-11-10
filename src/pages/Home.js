import React, { useEffect, useState } from 'react';
import api from '../api/service';
import GamesList from '../components/Games/GamesList';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('games').then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <main>
      <GamesList items={games} />
    </main>
  );
};

export default Home;
