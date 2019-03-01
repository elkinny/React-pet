import React, { Component } from 'react';
import LoginDetails from './components/LoginDetails/LoginDetails';
import './Login.css';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Confirmation from './components/Confirmation/Confirmation';

export default class Login extends Component {
  state = this.props.userData;

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  selectComponent() {
    const { step } = this.state;
    const { username, password, firstName, lastName, email } = this.state;
    const values = { username, password, firstName, lastName, email };

    switch (step) {
      case 1:
        return (
          <LoginDetails
            handleInput={this.handleInput}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            handleInput={this.handleInput}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            changeState={this.props.changeState}
            clearUserData={this.props.clearUserData}
          />
        );
    }
  }

  render() {
    return <div className="login">{this.selectComponent()}</div>;
  }
}
