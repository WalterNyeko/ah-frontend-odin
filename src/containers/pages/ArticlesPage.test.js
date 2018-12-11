import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from 'store';
import { ArticlesPage } from './ArticlesPage';

describe('ArticlePages tests', () => {
  test('it fetches all articles on mount', () => {
    const fetchAllArticles = jest.fn();

    mount(
      <Provider store={store}>
        <MemoryRouter>
          <ArticlesPage fetchAllArticles={fetchAllArticles} articles={[]} />
        </MemoryRouter>
      </Provider>,
    );

    expect(fetchAllArticles).toHaveBeenCalled();
  });
});
