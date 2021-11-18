import React from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const Nav = (props) => {
  return <NavStyled>{props.children}</NavStyled>;
};
export default Nav;
