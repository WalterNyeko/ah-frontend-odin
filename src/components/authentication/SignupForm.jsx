import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      this.signup();
    } else {
      window.Notify.error('Passwords do not match');
    }
  }

  signup() {
    const { signUp } = this.props;
    const user = { ...this.state };
    signUp(user);
  }

  render() {
    const { username, password, email, confirmPassword } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="has-input">
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.onChange}
              className="form-control"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="has-input">
            Email
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
              className="form-control"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="has-input">
            Password
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              className="form-control"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and 
              one uppercase and lowercase letter, and at 
              least 8 or more characters"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="has-input">
            confirm password
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.onChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  signUp: PropTypes.func.isRequired,
};

export default SignupForm;
