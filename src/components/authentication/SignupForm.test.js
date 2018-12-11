import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from './SignupForm';

jest.mock('react-notify-toast');

const props = {
  signUp: jest.fn(),
  signupData: {
    errors: {
      username: ['Wrong username'],
    },
  },
};

describe('signup tests', () => {
  let wrapper;

  it('should render signup component', () => {
    wrapper = shallow(<SignupForm {...props} signUp={jest.fn()} />);
    wrapper.instance().onChange({ target: { username: '', email: '', password: '' } });
    wrapper.instance().onSubmit({ preventDefault: jest.fn });
  });

  it('should return an error message', () => {
    wrapper = shallow(<SignupForm {...props} signUp={jest.fn()} />);
    const signup = wrapper.instance();
    signup.setState({ confirmPassword: 'Hello!@#123' });
    signup.onSubmit({ preventDefault: jest.fn });
  });
});
