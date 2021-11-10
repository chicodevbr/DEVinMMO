import React from 'react';
import { InputStyled } from './SearchBarStyled';

const SearchBar = (props) => {
  return (
    <InputStyled
      id={props.id}
      type="text"
      placeholder="search..."
      onChange={props.OnChange}
      value={props.value}
    />
  );
};

export default SearchBar;
