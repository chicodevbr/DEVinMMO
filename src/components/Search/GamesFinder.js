import React, { useEffect, useState } from 'react';
import GamesList from '../Games/GamesList';
import Container from '../UI/Container';
import { InputStyled, SearchBarContainer } from './SearchBarStyled';

const GamesFinder = (props) => {
  const [filterGames, setFilterGames] = useState(props.items);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilterGames(
      props.items.filter((game) =>
        game.title.toLowerCase().includes(searchTerm)
      )
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <React.Fragment>
      <SearchBarContainer>
        <InputStyled
          id={props.id}
          type="search"
          placeholder="search..."
          onChange={searchChangeHandler}
        />
      </SearchBarContainer>
      <Container>
        <GamesList items={filterGames} />
      </Container>
    </React.Fragment>
  );
};

export default GamesFinder;
