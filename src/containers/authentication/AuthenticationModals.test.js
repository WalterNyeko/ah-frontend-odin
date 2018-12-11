import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import AuthenticationModals, { handleResponse, mapActionsToProps } from './AuthenticationModals';

describe('Authentication Modals', () => {
  test('Authentication Modals renders without crashing', () => {
    expect(() =>
      mount(
        <MemoryRouter>
          <Provider store={store}>
            <AuthenticationModals />
          </Provider>
        </MemoryRouter>,
      ),
    ).not.toThrow();
  });
  test('it can trigger all store actions', () => {
    const dispatch = jest.fn();
    const actions = mapActionsToProps(dispatch);

    Object.keys(actions).forEach(action => actions[action]({}));

    expect(dispatch).toHaveBeenCalledTimes(Object.keys(actions).length - 1);
  });

  test('handle authentication should be called', () => {
    const dispatch = jest.fn();
    const handle = handleResponse(dispatch)('provider');
    expect(handle).toBeInstanceOf(Function);
    expect(
      handle({
        user: {
          email: 'wycliffkas@gmail.com',
          username: 'Wycliff',
          token: 'my token',
        },
      }),
    ).toBeUndefined();
  });
});
