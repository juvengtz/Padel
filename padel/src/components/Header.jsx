import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;