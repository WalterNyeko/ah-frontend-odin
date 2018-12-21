import React from 'react';
import { shallow } from 'enzyme';
import PasswordRsesetForm from './PasswordResetForm';
import { successSubmit } from './PasswordResetForm';

describe('PasswordRsesetForm', () => {
  test('test complete password reset form renders correctly', () => {
    const data = { email: 'mytest@gmail.com' };
    const wrapper = shallow(<PasswordRsesetForm successSubmit={jest.fn()} />);
    expect(wrapper.prop('beforeSubmit')(data)).toEqual(data);
  });
  it('returns false when password reset link failed to send', () => {
    const sucessStatus = successSubmit({ status: 0 });
    expect(sucessStatus).toEqual(false);
  });

  it('returns false when password reset link failed to send', () => {
    const hideModal = jest.fn;
    const sucessStatus = successSubmit({ status: 1 }, hideModal);
    expect(sucessStatus).toEqual(true);
  });
});
