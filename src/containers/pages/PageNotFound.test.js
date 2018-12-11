import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  test('It renders the same UI', () => {
    expect(
      renderer
        .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageNotFound />
            </MemoryRouter>
          </Provider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
