import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('It renders the same UI', () => {
    expect(
      renderer
        .create(
          <Provider store={store}>
            <MemoryRouter>
              <HomePage />
            </MemoryRouter>
          </Provider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
