import React, { useEffect, useState } from 'react';
import GamesList from '../Games/GamesList';

import {
  InputStyled,
  SearchBarContainer,
  SubTitleFinder,
  Container,
  BoxSearchInput,
} from './GameFinderStyled';

const GamesFinder = (props) => {
  const [filterGames, setFilterGames] = useState(props.items);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilterGames(
      props.items.filter((game) =>
        game.title.toLowerCase().includes(searchTerm)
      )
    );
  }, [searchTerm, props.items]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <SearchBarContainer>
        <BoxSearchInput>
          <InputStyled
            id={props.id}
            type="search"
            placeholder="search..."
            onChange={searchChangeHandler}
          />
        </BoxSearchInput>

        {searchTerm && (
          <SubTitleFinder>
            Findings for "{searchTerm}" ({filterGames.length})
          </SubTitleFinder>
        )}
      </SearchBarContainer>
      <GamesList items={filterGames} />
    </Container>
  );
};

export default GamesFinder;
