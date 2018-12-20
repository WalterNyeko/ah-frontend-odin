import React from 'react';
import { Form, Input } from 'forms';

export const successSubmit = data => {
  if (data.message !== 'Password Successfully Updated!') {
    window.Notify.error(data.message);
    return false;
  }
  window.Notify.success(data.message);
  
  return true;
  
};

const CompletePasswordResetForm = () => (
  <Form
    name="complete-password-reset-form"
    button={{ className: 'btn-primary btn-block', text: 'Reset Password' }}
    action="set_password/complete/"
    beforeSubmit={data => ({
      password: data.password,
      token: new URLSearchParams(window.location.search).get('token'),
    })}
    successSubmit={successSubmit}
  >
    <Input type="password" name="password" label="New Password" required />
  </Form>
);

export default CompletePasswordResetForm;
