import React from 'react';
import renderer from 'react-test-renderer';
import FacebookButton from 'components/authentication/FaceBookButton';
import GoogleButton from 'components/authentication/GoogleButton';

describe('Test social login buttons', () => {
  test('Google Button', () => {
    const wrapper = renderer.create(<GoogleButton onSuccessHandler={jest.fn()} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Facebook Button', () => {
    const wrapper = renderer.create(<FacebookButton onSuccessHandler={jest.fn()} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
