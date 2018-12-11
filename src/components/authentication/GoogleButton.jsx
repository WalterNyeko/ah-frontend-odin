import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import GoogleIcon from 'components/icons/Google';

const GoogleButton = ({ onSuccessHandler }) => (
  <GoogleLogin
    clientId="95888263107-0i151ro1iaqbdlecpssbdbte1bno6kfs.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={onSuccessHandler}
    render={renderProps => (
      <button onClick={renderProps.onClick} type="button" className="btn btn-link googleIcon">
        {' '}
        <GoogleIcon />
      </button>
    )}
  />
);

GoogleButton.propTypes = {
  onSuccessHandler: PropTypes.func.isRequired,
};

export default GoogleButton;
