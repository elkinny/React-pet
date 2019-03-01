import React, { Component } from 'react';
import './Confirmation.css';
import { Route } from 'react-router-dom';

export default class Confirmation extends Component {
  navigateToToDo = history => {
    const { values } = this.props;
    values.state = 1;
    this.props.changeState({ userData: values });

    if (values.username.length > 3 || values.password.length > 3)
      history.push('/todo');
    else alert('Too small username or password');
  };

  render() {
    const {
      username,
      password,
      firstName,
      lastName,
      email,
    } = this.props.values;

    return (
      <React.Fragment>
        <p className="confirmation__data">
          <span className="confirmation__label">username</span>
          <span className="confirmation__data">{username}</span>
        </p>
        <p className="confirmation__data">
          <span className="confirmation__label">password</span>
          <span className="confirmation__data">{password}</span>
        </p>
        <p className="confirmation__data">
          <span className="confirmation__label">first Name</span>

          <span className="confirmation__data">{firstName}</span>
        </p>
        <p className="confirmation__data">
          <span className="confirmation__label">last Name</span>

          <span className="confirmation__data">{lastName}</span>
        </p>
        <p className="confirmation__data">
          <span className="confirmation__label">email</span>

          <span className="confirmation__data">{email}</span>
        </p>

        <div className="buttons-block">
          <button onClick={this.props.prevStep}>Back</button>
          <Route
            render={({ history }) => (
              <button
                onClick={() => {
                  this.navigateToToDo(history);
                }}
              >
                Done
              </button>
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}
