import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './containers/Header/Header';
import About from './pages/About/About';
import ToDo from './pages/ToDo/ToDo';

class App extends Component {
  state = {
    toDoItems: [],
  };

  changeState = newState => {
    this.setState(newState);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={ToDo} changeState={this.changeState} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
