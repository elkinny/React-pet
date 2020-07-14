import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from 'components/Header';
import { About, ToDo, Login } from 'pages';

import './styles.css';

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

  componentDidMount() {
    axios.get(process.env.REACT_APP_DB_LINK).then(res =>
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

  basename = process.env.NODE_ENV === 'development' ? '' : '/React-to-do';

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

            <Switch>
              <Route
                exact
                path="/todo"
                render={() => {
                  return isLoggedIn ? (
                    <ToDo
                      changeState={this.changeState}
                      toDoItems={this.state.toDoItems}
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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
