import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const logButton = this.props.isLoggedIn ? (
      <a href="/" className="link">
        Log out
      </a>
    ) : (
      <Link to="/login" className="link">
        Log in
      </Link>
    );

    return (
      <header>
        <h1>ToDo List</h1>
        <nav>
          {logButton}
          <Link to="/todo" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
        </nav>
      </header>
    );
  }
}
