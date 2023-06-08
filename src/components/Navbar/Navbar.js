import React from 'react';

function Navbar() {
  return (
    <header className="navbar">
      <h1>Math Magician</h1>
      <nav className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/calculator">Calculator</a>
          </li>
          <li>
            <a href="/quotes">Quotes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
