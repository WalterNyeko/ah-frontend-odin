import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'forms';

export const successSubmit = (data, hideModal) => {
  if (data.status === 0) {
    window.Notify.error(data.message);
    return false;
  }
  window.Notify.success(data.message);
  hideModal();
  return true;
};

const PasswordRsesetForm = ({ hideModal }) => (
  <Form
    name="password-reset-form"
    button={{ className: 'btn-primary btn-block', text: 'Send Reset Password Link' }}
    action="password_reset/"
    beforeSubmit={data => ({ email: data.email })}
    successSubmit={event => successSubmit(event, hideModal)}
  >
    <Input type="email" name="email" label="Email Address" required />
  </Form>
);

PasswordRsesetForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default PasswordRsesetForm;
