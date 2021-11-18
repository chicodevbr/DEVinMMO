import React from 'react';

import { NavLink } from 'react-router-dom';
import ThemeToggle from '../Theme/ThemeToggle';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/games" onClick={props.onClick}>
          All Games
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" onClick={props.onClick}>
          Last News
        </NavLink>
      </li>
      <li>
        <ThemeToggle onClick={props.onClick} />
      </li>
    </ul>
  );
};

export default NavLinks;
