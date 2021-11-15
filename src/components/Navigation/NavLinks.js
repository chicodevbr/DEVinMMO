import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/home" onClick={props.onClick}>
          Games
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" onClick={props.onClick}>
          Last News
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={props.onClick}>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
