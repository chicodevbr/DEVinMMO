import React, { useEffect, useState } from 'react';
import GamesList from '../Games/GamesList';

import {
  InputStyled,
  SearchBarContainer,
  SubTitleFinder,
  Container,
} from './GameFinderStyled';

import Search from '@spectrum-icons/workflow/Search';
import { Flex } from '@react-spectrum/layout';

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
        <Flex gap="size-100">
          <Search width={{ base: '20px' }} />

          <InputStyled
            id={props.id}
            type="search"
            placeholder="search..."
            onChange={searchChangeHandler}
          />
        </Flex>

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
