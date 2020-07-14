import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import { About, ToDo } from 'pages';

import './styles.css';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/React-to-do';

const App = () => (
  <Router basename={basename}>
    <div className="App">
      <div className="container">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={ToDo} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
