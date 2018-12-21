import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/utils/Modal';
import PasswordResetForm from 'components/authentication/PasswordResetForm';

const PasswordResetModal = ({ show, hideModal }) => {
  const hidePasswordResetModal = () => hideModal('passwordReset');
  return (
    <Modal title="Reset your password" show={show} size="medium" onHide={hidePasswordResetModal}>
      <PasswordResetForm hideModal={hidePasswordResetModal} />
    </Modal>
  );
};

PasswordResetModal.propTypes = {
  show: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default PasswordResetModal;
