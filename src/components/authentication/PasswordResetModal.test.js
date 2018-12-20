import React from 'react';
import { shallow } from 'enzyme';
import PasswordResetModal from './PasswordResetModal';

describe('PasswordResetModal', () => {
  test('Modal onHide triggers the hideModal', () => {
    const hideModal = jest.fn();
    const wrapper = shallow(<PasswordResetModal hideModal={hideModal} show />);

    wrapper.prop('onHide')();
    expect(hideModal).toHaveBeenCalledWith('passwordReset');
  });
});
