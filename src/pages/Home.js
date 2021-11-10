import React, { useEffect, useState } from 'react';
import api from '../api/service';
import GamesList from '../components/Games/GamesList';
import SearchBar from '../components/Search/SearchBar';
import { SearchBarContainer } from '../components/Search/SearchBarStyled';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('games').then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <main>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <GamesList items={games} />
    </main>
  );
};

export default Home;
