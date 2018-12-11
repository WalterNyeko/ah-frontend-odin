import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/utils/Modal';
import LoginForm from './LoginForm';

export const signedIn = (user, hideModal, login) => {
  login(user);
  hideModal('login');
};

const LoginModal = ({ show, hideModal, login, handleAuthentication }) => (
  <Modal title="Login" show={show} size="medium" onHide={() => hideModal('login')}>
    <LoginForm
      successSubmit={({ user }) => signedIn(user, hideModal, login)}
      handleAuthentication={handleAuthentication}
    />
  </Modal>
);

LoginModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  handleAuthentication: PropTypes.func.isRequired,
};

export default LoginModal;
