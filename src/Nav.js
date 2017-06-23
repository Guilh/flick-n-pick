import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ()=> (
    <nav className="main-nav">
      <ul>
          <li><NavLink to='/cats' activeClassName="selected">Cats</NavLink></li>
          <li><NavLink to='/flowers' activeClassName="selected">Flowers</NavLink></li>
          <li><NavLink to='/rainbows' activeClassName="selected">Rainbows</NavLink></li>
          <li><NavLink to='/cake' activeClassName="selected">Cake</NavLink></li>
      </ul>
    </nav>
)

export default Nav;
