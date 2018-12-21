import React from 'react';
import { shallow } from 'enzyme';
import CompletePasswordResetForm, { successSubmit } from './CompletePasswordResetForm';

describe('CompletePasswordResetForm', () => {
  test('test complete password reset form renders correctly', () => {
    const data = { password: 'my-password', token: null };
    const wrapper = shallow(<CompletePasswordResetForm successSubmit={jest.fn()} />);
    expect(wrapper.prop('beforeSubmit')(data)).toEqual(data);
  });
  it('returns false when password update fails', () => {
    const sucessStatus = successSubmit({ data: { message: '' } });
    expect(sucessStatus).toEqual(false);
  });

  it('returns true when password is updated successfully', () => {
    const sucess = successSubmit({ message: 'Password Successfully Updated!' });
    expect(sucess).toEqual(true);
  });
});
