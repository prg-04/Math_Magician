import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';

function Navbar() {
  return (
    <header className="navbar">
      <h1>Math Magician</h1>
      <nav className="links">
        <ul>
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/calculator">
            Calculator
          </NavLink>
          <NavLink className="link" to="/quotes ">
            Quotes
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
