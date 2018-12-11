import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookIcon from 'components/icons/Facebook';

const FacebookButton = ({ onSuccessHandler }) => (
  <FacebookLogin
    appId="414927182376293"
    autoLoad={false}
    fields="name,email"
    callback={onSuccessHandler}
    render={renderProps => (
      <button onClick={renderProps.onClick} className="btn btn-link facebookIcon" type="button">
        {' '}
        <FacebookIcon />
      </button>
    )}
  />
);

FacebookButton.propTypes = {
  onSuccessHandler: PropTypes.func.isRequired,
};

export default FacebookButton;
