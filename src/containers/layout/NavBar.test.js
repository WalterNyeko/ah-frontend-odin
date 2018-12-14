import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import triggersmapActionsToProps from 'tests/triggersmapActionsToProps';
import { NavBar, mapActionsToProps } from './NavBar';

const user = Factory.of('user').make();

describe('NavBar', () => {
  test('It shows the Auth Links if a user is authenticated', () => {
    const wrapper = shallow(
      <NavBar showModal={jest.fn()} user={user} logout={jest.fn()} history={{}} />,
    );

    expect(wrapper.find('AuthLinks')).toHaveLength(1);
  });

  test('triggersmapActionsToProps', () => {
    triggersmapActionsToProps(mapActionsToProps);
  });
  test('invokes logout without crashing', () => {
    const wrapper = shallow(
      <NavBar showModal={jest.fn()} user={user} logout={jest.fn()} history={{}} />,
    );

    expect(() => wrapper.find('AuthLinks').prop('logout')()).not.toThrow();
  });
});
