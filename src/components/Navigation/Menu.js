import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = (props) => {
  return (
    <Button onClick={props.onClick}>
      <IconContext.Provider value={{ size: '2rem', color: 'white' }}>
        <GiHamburgerMenu />
      </IconContext.Provider>
    </Button>
  );
};

export default Menu;
