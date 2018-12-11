import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GuestLinks from './GuestLinks';

describe('GuestLinks', () => {
  test('It renders the same UI', () => {
    expect(renderer.create(<GuestLinks showModal={jest.fn()} />).toJSON()).toMatchSnapshot();
  });

  test('login button triggers show login modal', () => {
    const showModal = jest.fn();
    const wrapper = shallow(<GuestLinks showModal={showModal} />);

    wrapper.find('button[data-id="login"]').simulate('click');
    expect(showModal).toHaveBeenCalledWith('login');
  });

  test('signup button triggers show signup modal', () => {
    const showModal = jest.fn();
    const wrapper = shallow(<GuestLinks showModal={showModal} />);

    wrapper.find('button[data-id="signup"]').simulate('click');
    expect(showModal).toHaveBeenCalledWith('signup');
  });
});
