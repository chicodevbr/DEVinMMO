import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import NavLinks from './NavLinks';

const MainHeader = (props) => {
  return (
    <Header>
      <h1>
        <Link to="/">DEVinMMO</Link>
      </h1>
      <Nav>
        <NavLinks />
      </Nav>
    </Header>
  );
};

export default MainHeader;
