import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store/helpers';
import PropTypes from 'prop-types';
import {
  signUp,
  hideAuthModal,
  loginUser,
  socialAuthentication,
} from 'store/actions/authentication';
import LoginModal from 'components/authentication/LoginModal';
import SignupModal from 'components/authentication/SignupModal';

const AuthenticationModals = props => {
  const { showModals, hideModal, signupHandler, signupData, login, handleAuthentication } = props;

  return (
    <React.Fragment>
      <LoginModal
        show={showModals.login}
        login={login}
        hideModal={hideModal}
        handleAuthentication={handleAuthentication}
      />
      <SignupModal
        show={showModals.signup}
        signupHandler={signupHandler}
        signupData={signupData}
        hideModal={hideModal}
      />
    </React.Fragment>
  );
};

export const handleResponse = dispatch => provider => response => {
  const accessToken = response.access_token || response.accessToken;
  return dispatch(socialAuthentication(provider, accessToken));
};

export const mapActionsToProps = dispatch => ({
  signupHandler: data => dispatch(signUp(data)),
  hideModal: name => dispatch(hideAuthModal(name)),
  login: user => dispatch(loginUser(user)),
  handleAuthentication: handleResponse(dispatch),
});

AuthenticationModals.propTypes = {
  signupData: PropTypes.string.isRequired,
  signupHandler: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModals: PropTypes.shape({
    login: PropTypes.bool.isRequired,
    signup: PropTypes.bool.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
  handleAuthentication: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps({
    signupData: 'authentication.signupData',
    showModals: 'authentication.showModals',
  }),
  mapActionsToProps,
)(AuthenticationModals);
