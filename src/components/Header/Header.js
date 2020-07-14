import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './styles.css';

export default class Header extends Component {
  logout = history => {
    this.props.clearUserData();
    history.push('/login');
  };

  render() {
    const logButton = this.props.isLoggedIn ? (
      <Route
        render={({ history }) => (
          <button
            className="link"
            onClick={() => {
              this.logout(history);
            }}
          >
            Logout
          </button>
        )}
      />
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
