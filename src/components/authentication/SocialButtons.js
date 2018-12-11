import React from 'react';

import PropTypes from 'prop-types';
import GoogleButton from 'components/authentication/GoogleButton';
import FacebookButton from 'components/authentication/FaceBookButton';

const SocialButtons = ({ handleAuthentication }) => (
  <div className="btn-group d-flex">
    <GoogleButton onSuccessHandler={handleAuthentication('google_login/')} />
    <FacebookButton onSuccessHandler={handleAuthentication('facebook_login/')} />
  </div>
);

SocialButtons.propTypes = {
  handleAuthentication: PropTypes.func.isRequired,
};

export default SocialButtons;
