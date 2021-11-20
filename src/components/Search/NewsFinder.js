import React, { useEffect, useState } from 'react';
import NewsList from '../News/NewsList';

import {
  InputStyled,
  SearchBarContainer,
  SubTitleFinder,
  Container,
  BoxSearchInput,
} from './GameFinderStyled';

const NewsFinder = (props) => {
  const [filteredNews, setFilterNews] = useState(props.items);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilterNews(
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
            placeholder=" search..."
            onChange={searchChangeHandler}
          />
        </BoxSearchInput>

        {searchTerm && (
          <SubTitleFinder>
            Findings for "{searchTerm}" ({filteredNews.length})
          </SubTitleFinder>
        )}
      </SearchBarContainer>
      <NewsList items={filteredNews} />
    </Container>
  );
};

export default NewsFinder;
