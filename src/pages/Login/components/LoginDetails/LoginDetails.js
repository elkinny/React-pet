import React, { Component } from 'react';
import './LoginDetails.css';

export default class LoginDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          value={this.props.values.username}
          onChange={this.props.handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          value={this.props.values.password}
          onChange={this.props.handleInput}
        />
        <button onClick={this.props.nextStep}>Next</button>
      </React.Fragment>
    );
  }
}
