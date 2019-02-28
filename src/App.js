import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';

import Header from './containers/Header/Header';
import About from './pages/About/About';
import ToDo from './pages/ToDo/ToDo';

class App extends Component {
  state = {
    toDoItems: [],
  };

  DbLink = 'https://my-json-server.typicode.com/elkinny/db/toDo';

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

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={() =>
              <ToDo 
                changeState={this.changeState}
                toDoItems={this.state.toDoItems}
                DbLink={this.DbLink}
              />
            }/>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
