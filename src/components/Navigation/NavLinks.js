import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/home">Games</NavLink>
      </li>
      <li>
        <NavLink to="/news">Last News</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
