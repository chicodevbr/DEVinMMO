import React from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
  margin: 2rem;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Nav = (props) => {
  return <NavStyled>{props.children}</NavStyled>;
};
export default Nav;
