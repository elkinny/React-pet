import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import axios from 'axios';

import Header from './containers/Header/Header';

import About from './pages/About/About';
import ToDo from './pages/ToDo/ToDo';
import Login from './pages/Login/Login';

class App extends Component {
  state = {
    toDoItems: [],
    userData: {
      step: 1,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
    },
  };

  DbLink = 'https://my-json-server.typicode.com/elkinny/React-to-do/toDo';

  basename = process.env.NODE_ENV === 'development' ? '' : '/React-to-do';

  componentDidMount() {
    axios.get(this.DbLink).then(res =>
      this.setState({
        toDoItems: res.data,
      })
    );
  }

  changeState = newState => {
    this.setState(newState);
  };

  clearUserData = () => {
    this.setState({
      userData: {
        step: 1,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
      },
    });
  };

  render() {
    const { username, password } = this.state.userData;
    const isLoggedIn = username && password;
    return (
      <Router basename={this.basename}>
        <div className="App">
          <div className="container">
            <Header
              isLoggedIn={isLoggedIn}
              clearUserData={this.clearUserData}
            />

            <Route
              exact
              path="/todo"
              render={() => {
                return isLoggedIn ? (
                  <ToDo
                    changeState={this.changeState}
                    toDoItems={this.state.toDoItems}
                    DbLink={this.DbLink}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />

            <Route path="/about" component={About} />

            <Route
              exact
              path="/login"
              render={() =>
                isLoggedIn ? (
                  <Redirect to="/todo" />
                ) : (
                  <Login
                    changeState={this.changeState}
                    userData={this.state.userData}
                  />
                )
              }
            />

            <Route
              exact
              path="/"
              render={() =>
                isLoggedIn ? <Redirect to="/todo" /> : <Redirect to="/login" />
              }
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
