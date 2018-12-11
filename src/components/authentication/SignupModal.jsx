import React from 'react';
import Modal from 'components/utils/Modal';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';

const SignupModal = ({ show, signupHandler, signupData, hideModal }) => (
  <Modal title="Sign Up" show={show} onHide={() => hideModal('signup')}>
    <SignupForm signUp={signupHandler} signupData={signupData} />
  </Modal>
);

SignupModal.propTypes = {
  signupData: PropTypes.string.isRequired,
  signupHandler: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default SignupModal;
