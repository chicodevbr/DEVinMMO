import React, { useEffect, useState } from 'react';
import api from '../api/service';
import GamesList from '../components/Games/GamesList';
import SearchBar from '../components/Search/SearchBar';
import { SearchBarContainer } from '../components/Search/SearchBarStyled';

const Home = () => {
  const [games, setGames] = useState([]);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    api.get('games').then((response) => {
      setGames(response.data);
    });
  }, []);

  const changeInputHandler = (event) => {
    event.preventDefault();

    setInputValue(event.target.value);
  };

  console.log(inputValue);
  const loadedGames = games.filter((game) => game.title === inputValue);

  if (inputValue === null || '' || undefined) {
    return (
      <main>
        <SearchBarContainer>
          <SearchBar onChange={changeInputHandler} />
        </SearchBarContainer>
        <GamesList items={games} />
      </main>
    );
  }

  return (
    <main>
      <SearchBarContainer>
        <SearchBar onChange={changeInputHandler} />
      </SearchBarContainer>
      <GamesList items={loadedGames} />
    </main>
  );
};

export default Home;
