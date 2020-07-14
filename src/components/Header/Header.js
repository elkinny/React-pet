import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header = () => (
  <header className="header">
    <h1 className="header__title">ToDo List</h1>
    <nav className="header__nav">
      <Link to="/" className="header__nav-item">
        Home
      </Link>
      <Link to="/about" className="header__nav-item">
        About
      </Link>
    </nav>
  </header>
);

export default Header;
