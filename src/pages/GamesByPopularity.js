import React, { useEffect, useState } from 'react';
import api from '../api/service';
import GamesList from '../components/Games/GamesList';

const GamesByPopularity = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api
      .get('games', { params: { 'sort-by': 'popularity' } })
      .then((response) => {
        setGames(response.data);
      });
  }, []);

  return (
    <main>
      <GamesList items={games} />
    </main>
  );
};

export default GamesByPopularity;
