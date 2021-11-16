import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Nav from './Nav';
import NavLinks from './NavLinks';
import Backdrop from '../UI/Backdrop';
import SideDrawer from './SideDrawer';
import Title from './Title';

const MainHeader = (props) => {
  const [drawIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawIsOpen} onClick={closeDrawerHandler}>
        <NavLinks onClick={closeDrawerHandler} />
      </SideDrawer>
      <Header>
        <Menu onClick={openDrawerHandler} />
        <Title>
          <Link to="/">DEVinMMO</Link>
        </Title>

        <Nav>
          <NavLinks />
        </Nav>
      </Header>
    </React.Fragment>
  );
};

export default MainHeader;
