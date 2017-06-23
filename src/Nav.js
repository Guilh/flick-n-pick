import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ()=> (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/flowers'>Flowers</NavLink></li>
            <li><NavLink to='/rainbows'>Rainbows</NavLink></li>
            <li><NavLink to='/cake'>Cake</NavLink></li>
        </ul>
    </nav>
)

export default Nav;
