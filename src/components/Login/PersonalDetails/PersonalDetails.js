import React, { Component } from 'react';

export default class PersonalDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name="firstName"
          placeholder="firstName..."
          value={this.props.values.firstName}
          onChange={this.props.handleInput}
        />
        <input
          type="text"
          name="lastName"
          placeholder="lastName..."
          value={this.props.values.lastName}
          onChange={this.props.handleInput}
        />
        <input
          type="email"
          name="email"
          placeholder="email..."
          value={this.props.values.email}
          onChange={this.props.handleInput}
        />
        <div className="buttons-block">
          <button onClick={this.props.prevStep}>Back</button>
          <button onClick={this.props.nextStep}>Next</button>
        </div>
      </React.Fragment>
    );
  }
}
