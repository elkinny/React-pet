import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => (
  <header>
    <h1>ToDo List</h1>
    <nav>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
    </nav>
  </header>
);

export default Header;
