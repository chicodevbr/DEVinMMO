import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Span = styled.span`
  display: block;
  width: 3rem;
  height: 3px;
  background: white;
`;

const Menu = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Span />
      <Span />
      <Span />
    </Button>
  );
};

export default Menu;
